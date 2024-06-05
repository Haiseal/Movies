// server.js
const express = require('express');
const app = express();
const cors = require('cors'); // Import the CORS middleware
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from http://localhost:3000

// Routes
app.use('/api', movieRoutes);
app.use('', userRoutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
