/////////////////////////// MongoDB Connection ////////////////////////////////
const { MongoClient } = require("mongodb");
const URL = ""; // Replace with your connection URL
const client = new MongoClient(URL);

// Connect to login collection
async function GetConnectionSignup() {
  let result = await client.connect();
  let db = result.db("Uphill");
  console.log("Signup collection connected successfully");
  return db.collection("login"); // Change 'login' to 'signup' for signup functionality
}

// Connect to servey collection
async function GetConnectionServey() {
  let result = await client.connect();
  let db = result.db("Uphill");
  console.log("Signup collection connected successfully");
  return db.collection("servey"); // Change 'login' to 'signup' for signup functionality
}


/////////////////////////// Signup Route ////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser'); // Added for signup data parsing
const bcrypt = require('bcryptjs');

const port = 5200;
const app = express();
app.use(bodyParser.json()); // Parse incoming JSON data

const cors = require('cors');
app.use(cors({
  origin: "http://localhost:4200" // Adjust origin if needed
}));

// Allowing client to access server API
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // Replace with allowed origin
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
  next();
});

// Signup route (POST request)
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body; // Extract signup data from request
  
    const db = await GetConnectionSignup(); // Get signup collection
  
    // Check if user already exists (optional)
    const existingUser = await db.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
      const newUser = { name, email, password: hashedPassword }; // Create new user with hashed password
      const result = await db.insertOne(newUser); // Insert user into signup collection
      // res.status(201).json({ message: 'User created successfully', user: result.ops[0] }); // Return success message and inserted user data (without password)
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating user' });
    }
});
  
// servey data storing
app.post('/servey', async (req, res) => {
    const serveyData = req.body; // Extract signup data from request
  
    const db = await GetConnectionServey(); // Get signup collection
  
    try {
      const result = await db.insertOne(serveyData); // Insert user into signup collection
      console.error(err);
      res.status(500).json({ message: 'Error uploading data' });
    }
});

// User Authentication
async function authenticateUser(email, password) {
    try {
      const usersCollection = await GetConnectionSignup();
      const user = await usersCollection.findOne({ email });
  
      if (!user) {
        // User not found (invalid email)
        return false;
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password); // Compare hashed passwords
      return isPasswordValid;
    } catch (err) {
      console.error("Error during user authentication:", err);
      return false;
    }
}
// Login Request
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    authenticated = await authenticateUser(email, password);
  
    if (authenticated) {
      // Generate and send JWT token (replace with your token generation logic)
      const token = generateToken(userId);
      res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
});

/////////////////////////// Server Start ////////////////////////////////
app.listen(port, () => {
  console.log("Server started successfully");
});

app.get("/", (req, res) => {
  res.send("Server is on");
});
