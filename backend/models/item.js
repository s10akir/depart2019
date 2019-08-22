const mongoose = require('mongoose');

const Item = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  original_price: {
    type: Number,
    required: true,
    min: 0
  },
  best_by: { // 賞味期限
    type: Date
  },
  use_by: { // 消費期限
    type: Date
  },
  published_until: { // 掲載期限
    type: Date,
    required: true
  },
  image: { // 商品写真のurl
    type: String
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

mongoose.model('Item', Item);