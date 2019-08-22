const cookieParser = require('cookie-parser');
const express = require('express');
const httpErrors = require('http-errors');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const userRouter = require('./routes/api/v1/user');
const storeRouter = require('./routes/api/v1/store');
const itemRouter = require('./routes/api/v1/item');
const favRouter = require('./routes/api/v1/fav');
require('./models');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret' })); // TODO: change secret
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/store', storeRouter);
app.use('/api/v1/item', itemRouter);
app.use('/api/v1/fav', favRouter);

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(httpErrors(404));
// });

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
