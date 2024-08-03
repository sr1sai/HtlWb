const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const uri = 'mongodb+srv://srisaidivyakola:D%4030012003@cluster0.hesyche.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Sign-Up Route
app.post('/signup', async (req, res) => {
  const { fullName, phone, email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      phone,
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.send('User signed up successfully');
  } catch (error) {
    res.status(500).send('Error signing up user');
  }
});

// Sign-In Route
app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });
    res.send({ token });
  } catch (error) {
    res.status(500).send('Error signing in user');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
