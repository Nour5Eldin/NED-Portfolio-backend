const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    clientRole: { type: String, required: true },
    message: { type: String, required: true },
    keywords: [String],
    status: { type: String, enum: ['draft', 'published'], default: 'draft' }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);