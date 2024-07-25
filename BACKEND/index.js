// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Import your routes

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', userRoutes); // Use routes for authentication

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/textCase', {
  // useNewUrlParser: true, // Deprecated
  // useUnifiedTopology: true, // Deprecated
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
