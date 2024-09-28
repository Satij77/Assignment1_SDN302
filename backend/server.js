const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const quizRoutes = require('./routes/quizRoutes');
require('dotenv').config();
<<<<<<< HEAD
=======

>>>>>>> 7addb2d852acf2c2d6a2ceb1633b845588980f92
const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', quizRoutes);

// Connect to the database
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
