const mongoose = require('mongoose');

const Favorite = new mongoose.Schema({
  user_id: [{type: Schema.Types.ObjectId, ref: 'User'}],
  item_id: [{type: Schema.Types.ObjectId, ref: 'Item'}]
});

mongoose.model('Favorite', Favorite);