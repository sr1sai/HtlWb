const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for '${req.url}'`);
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'OPTIONS') {
        console.log('Request Body:', req.body);
    }
    next();
});

// MongoDB connection
const uri = 'mongodb+srv://srisaidivyakola:D%4030012003@cluster0.hesyche.mongodb.net/HotelWeb?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Define a schema and model for the user
const userSchema = new mongoose.Schema({
  full_name: String,
  username: { type: String, unique: true },
  phone: String,
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

// Signup route
app.post('/signup', async (req, res) => {
  console.log('Received POST request for /signup ._.');
  console.log('Request Body:', req.body);

  const { full_name, username, phone, email, password } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log('Username already exists');
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      full_name,
      username,
      phone,
      email,
      password: hashedPassword
    });

    // Save the new user to the database
    await newUser.save();
    console.log('New user saved:', newUser);

    res.json({ message: 'Signup successful', data: newUser });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/signin',async(req,res)=>{
  console.log('Received POST request for /signin ._.');
  console.log('Request Body:', req.body);

  try {
    const existingUser = await User.findOne({ username:req.body.username });
    if (!existingUser) {
      console.log('Username Does not exist');
      return res.status(400).json({ message: 'Username Does Not Exist' });
    }

    // Hash the password before saving
    const isMatch = await bcrypt.compare(req.body.password, existingUser.password);
    if(isMatch){
      console.log('Signin successful');
      res.json({ message: 'Signin successful'});
    }
    else{
      console.log('Incorrect Password');
      res.json({ message: 'Incorrect Password'});
    }
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/order_details',async(req,res)=>{
  console.log('Received POST request for /order ._.');
  console.log('Request Body',req.body);
  try{
    const existingUser = await User.findOne({ username:req.body.username });
    if (!existingUser) {
      console.log('Username Does not exist');
      return res.status(400).json({ message: 'Username Does Not Exist' });
    }
    else{
      res.json({
        'name':existingUser.full_name,
        'mobile':existingUser.phone
      })
    }
   } catch (error) {
  console.error('Error during signup:', error);
  res.status(500).json({ message: 'Internal server error' });
}
})

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
