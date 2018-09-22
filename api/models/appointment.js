const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    appointmentId: Number
});

module.exports = mongoose.model('Appointment', appointmentSchema);
