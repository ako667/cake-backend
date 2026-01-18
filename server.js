const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const cakeRoutes = require('./routes/cakes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Atlas connection
mongoose
  .connect(
    'mongodb+srv://cakeuser:kuka12345@cluster0.axv1yrw.mongodb.net/cakeShop?retryWrites=true&w=majority'
  )
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log(err));

// API routes
app.use('/api', cakeRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
