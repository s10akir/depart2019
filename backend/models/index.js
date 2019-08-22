require('./user');
require('./store');
require('./item');
require('./favorite');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/depart', { useNewUrlParser: true });
