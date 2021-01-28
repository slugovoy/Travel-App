// dependencies
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

// dotenv
require('dotenv').config();

// middleware
const middlewares = require('./middlewares');
const logs = require('./api/logs');

// express
const app = express();

// mongodb connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/travelapp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use('/api/logs', logs);

// error handlers
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// port connection
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});