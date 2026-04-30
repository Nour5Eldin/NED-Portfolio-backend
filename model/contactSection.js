const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema({
    phoneNumber: { type: String },
    address: { type: String },
    mapImage: { type: String },
    email: { type: String },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' }
},{timestamps: true});

module.exports = mongoose.model('ContactInfo', contactInfoSchema);