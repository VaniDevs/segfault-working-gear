const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: String,
    telephone: String,
    worktype: String,
    age: Number
});

module.exports = mongoose.model('Customer', customerSchema);
