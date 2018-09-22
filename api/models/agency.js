const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const agencySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required:true},
    email: {type: String, required: true, unique: true},
    address: String,
    telephone: {type: String,required: true},
    password: {type: String,required: true}
});

module.exports = mongoose.model('Agency', agencySchema);
