const mongoose = require('mongoose');

const User = new mongoose.Schema({
  id: String,
});

mongoose.model('User', User);
