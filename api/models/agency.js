const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const agencySchema = new Schema({
    name: String,
    email: String,
    address: String,
    telephone: String,
    password: String
});

module.exports = mongoose.model('Agency', agencySchema);
