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

// MongoDB connection
const uri = 'mongodb+srv://srisaidivyakola:D%4030012003@cluster0.hesyche.mongodb.net/HotelWeb?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`Test: Received ${req.method} request for '${req.url}'`);
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'OPTIONS') {
        console.log('Test: Request Body:', req.body);
    }
    next();
});

// Define a schema and model for the user
const userSchema = new mongoose.Schema({
  full_name: String,
  username: { type: String, unique: true },
  phone: String,
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

const orderSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  orderType: String,
  address: String,
  total: String
});
const Order = mongoose.model('Order', orderSchema);

const itemSchema = new mongoose.Schema({
  order_id: mongoose.Schema.Types.ObjectId,
  name: String,
  quantity: Number,
  price_each: String,
  price_total: String
});
const Item = mongoose.model('Item', itemSchema);

const newsletterSchema = new mongoose.Schema({
  email: String
});
const newsletter= mongoose.model("newsletter",newsletterSchema);

const reservationRoom=mongoose.Schema({
  full_name:String,
  email:String,
  phone:String,
  total:Number
});
const Reservation_Room= mongoose.model("Reservation_Room",reservationRoom);

const single_rooms=mongoose.Schema({
  reservation_id:mongoose.Schema.Types.ObjectId,
  people:Number,
  check_in_date:Date,
  check_out_date:Date,
  price_per:Number,
  price_total:Number,
  status:Boolean
});
const Single_Rooms = mongoose.model("Single_Rooms",single_rooms);

const double_rooms=mongoose.Schema({
  reservation_id:mongoose.Schema.Types.ObjectId,
  people:Number,
  check_in_date:Date,
  check_out_date:Date,
  price_per:Number,
  price_total:Number,
  status:Boolean
});
const Double_Rooms = mongoose.model("Double_Rooms",double_rooms);

const suite_rooms=mongoose.Schema({
  reservation_id:mongoose.Schema.Types.ObjectId,
  people:Number,
  check_in_date:Date,
  check_out_date:Date,
  price_per:Number,
  price_total:Number,
  status:Boolean
});
const Suite_Rooms = mongoose.model("Suite_Rooms",suite_rooms);

// Route
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

app.post('/order_details', async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (!existingUser) {
      console.log('Username Does Not Exist');
      return res.status(400).json({ message: 'Username Does Not Exist' });
    } else {
      res.json({
        'name': existingUser.full_name,
        'mobile': existingUser.phone
      });
    }
  } catch (error) {
    console.error('Error during order details fetch:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/place_order',async(req,res)=>{
  console.log('Received POST request for /place_order ._.');
  console.log('Request Body:', req.body);
  
  const { name, mobile, orderType, address, items, total } = req.body;

  try {
    const newOrder = new Order({
      name,
      mobile,
      orderType,
      address,
      total
    });

    await newOrder.save();

    items.forEach(async (item) => {
      const newItem = new Item({
          order_id: newOrder._id,
          name: item.name,
          quantity: item.quantity,
          price_each: item.price_each,
          price_total: item.price_total
      });
      await newItem.save();
  });


    console.log('Order placed:', newOrder);

    res.json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

});

app.post("/newsletter_sub", async (req, res) => {
  console.log('Received POST request for /newsletter_sub.');
  console.log('Request Body:', req.body);
  
  const username = req.body.username;
  
  try {
    const user = await User.findOne({ username: username });
    const existingSubscriber = await newsletter.findOne({ email: user.email });
    
    if (existingSubscriber) {
      console.log('Email already subscribed:', email);
      res.json({ message: 'Already subscribed' });
    }
    else{
      const newLtr = new newsletter({
        email:user.email
      });
      await newLtr.save();
      res.json({ message: 'Subscription successful' });
    }

  } catch (error) {
    console.error('Error saving newsletter subscription:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post("/newsletter_unsub", async (req, res) => {
  console.log('Received POST request for /newsletter_unsub.');
  console.log('Request Body:', req.body);
  const username = req.body.username;

  try {
    const user = await User.findOne({ username: username });
    const result = await newsletter.deleteOne({ email: user.email });

    if (result.deletedCount > 0) {
      console.log('Unsubscription successful:', user.email);
      res.status(200).json({ message: 'Unsubscription successful' });
    } else {
      console.log('Email not found:', user.email);
      res.status(404).json({ message: 'Not Subscribed' });
    }

  } catch (err) {
    console.error('Error during unsubscription:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post("/load_rooms", async (req, res) => {
  console.log('Received POST request for /load_rooms.');
  console.log('Request Body:', req.body);

  try {
    // Single Rooms
    const single = await Single_Rooms.find();
    const singleUpdates = single.map(async (room) => {
      console.log("single",room.status);
      if (room.check_out_date == null || (room.check_out_date > new Date() && room.check_out_date <= new Date())) {
        room.reservation_id=null;
        room.people=null;
        room.check_in_date=null;
        room.check_out_date=null;
        room.price_per=null;
        room.price_total=null;
        room.status = true;
      } else {
        room.status = false;
      }
      await room.save();  // Save the updated status
    });
    await Promise.all(singleUpdates);

    // Double Rooms
    const double = await Double_Rooms.find();
    const doubleUpdates = double.map(async (room) => {
      console.log("double",room.status);
      if (room.check_out_date == null || room.check_out_date <= new Date()) {
        room.reservation_id=null;
        room.people=null;
        room.check_in_date=null;
        room.check_out_date=null;
        room.price_per=null;
        room.price_total=null;
        room.status = true;
      } else {
        room.status = false;
      }
      await room.save();  // Save the updated status
    });
    await Promise.all(doubleUpdates);

    // Suite Rooms
    const suite = await Suite_Rooms.find();
    const suiteUpdates = suite.map(async (room) => {
      console.log("suite",room.status);
      if (room.check_out_date == null || room.check_out_date <= new Date()) {
        room.reservation_id=null;
        room.people=null;
        room.check_in_date=null;
        room.check_out_date=null;
        room.price_per=null;
        room.price_total=null;
        room.status = true;
      } else {
        room.status = false;
      }
      await room.save();  // Save the updated status
    });
    await Promise.all(suiteUpdates);

    res.json({ message: "Rooms loaded and updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
});

app.post("/reservation_details",async(req,res)=>{
  const user= await User.findOne({username:req.body.username});
  console.log("Req Bdy: ",req.body);
  if(user){
    res.json({
      fullName:user.full_name,
      email:user.email,
      phone:user.phone
    })
  }
});

app.post("/reserve_room", async (req, res) => {
  console.log('Received POST request for /reserve_room.');
  console.log('Request Body:', req.body);

  const name = req.body.fullName;
  const email = req.body.email;
  const phone = req.body.phone;
  let total = 0;
  req.body.cartItems.forEach(room => {
    total += room.roomCost;
  });

  const newRes = new Reservation_Room({
    full_name: name,
    email,
    phone,
    total
  });

  try {
    await newRes.save();
    const res_id = newRes._id;

    // Flag to track room availability
    let roomNotAvailable = false;

    for (const room of req.body.cartItems) {
      const people = room.numPeople;
      const check_in_date = room.checkin;
      const check_out_date = room.checkout;
      const price_per = Number.parseInt(room.roomType.split(" - ₹")[1].split("/night")[0].trim());
      const price_total = room.roomCost;

      let reservedRoom = null;

      if (room.roomType.includes("Single")) {
        reservedRoom = await Single_Rooms.findOne({ status: true });  // Use await here
      } else if (room.roomType.includes("Double")) {
        reservedRoom = await Double_Rooms.findOne({ status: true });  // Use await here
      } else if (room.roomType.includes("Suite")) {
        reservedRoom = await Suite_Rooms.findOne({ status: true });   // Use await here
      }

      if (reservedRoom) {
        reservedRoom.reservation_id = res_id;
        reservedRoom.people = people;
        reservedRoom.check_in_date = check_in_date;
        reservedRoom.check_out_date = check_out_date;
        reservedRoom.price_per = price_per;
        reservedRoom.price_total = price_total;
        await reservedRoom.save();    // Don't forget to save the room
      } else {
        roomNotAvailable = true;
        break;  // Exit the loop early if a room is not available
      }
    }

    if (roomNotAvailable) {
      res.json({ message: "Rooms not available" });
    } else {
      res.json({ message: "Reservation Has Been Made" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
});

app.post("/reserv_table",async(req,res)=>{
  console.log('Received POST request for /reserv_table.');
  console.log('Request Body:', req.body);
})


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
