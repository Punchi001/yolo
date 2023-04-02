require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');

// Connecting to the Database
let mongodb_url = process.env.MONGODB_URI;

// define a url to connect to the database
mongoose.connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.log(`Error connecting to the database: ${err}`);
  });

// Initializing express
const app = express();

// Body parser middleware
app.use(express.json());

app.use(upload.array());

// Cors 
app.use(cors());

// Use Route
app.use('/api/products', productRoute);

// Define the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
