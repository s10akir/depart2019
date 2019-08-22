const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
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
  },
  store_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Store' }],
});

mongoose.model('User', User);
