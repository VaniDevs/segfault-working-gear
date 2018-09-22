const express = require('express');
const app = express();
const mongoose = require('mongoose');
const agencyRoutes = require('./api/routes/agencies')


mongoose.connect('mongodb://admin:admin0@ds054289.mlab.com:54289/working-gear')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use("/agencies", agencyRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});