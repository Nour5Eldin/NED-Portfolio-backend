const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    details: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' }
},{ timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);