const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema({
    phoneNumber: { type: String },
    address: { type: String },
    mapImage: { type: String },
    email: { type: String }
},{timestamps: true});

module.exports = mongoose.model('ContactInfo', contactInfoSchema);