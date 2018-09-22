const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    number: Number
});

module.exports = mongoose.model('Item', itemSchema);