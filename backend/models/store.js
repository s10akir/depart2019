const mongoose = require('mongoose');

const Store = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  name: {
    type:  String,
    required: true
  },
  station: {
    type: String,
    required: true
  },
  prefecture: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  block_number: {
    type: String,
    required: true
  },
  opening_hours: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  updated_at: {
    type: Date,
    required: true
  }
});

mongoose.model('Store', Store);
