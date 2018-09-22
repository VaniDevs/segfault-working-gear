const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://admin:admin0@ds054289.mlab.com:54289/working-gear')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})


app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});