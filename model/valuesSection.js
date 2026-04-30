const mongoose = require('mongoose');

const valueSchema = new mongoose.Schema({
    subheading: String,
    title: String,
    description: String,
    cards: [
        {
            icon: String,
            title: String,
            text: String
        }
    ],
    status: { type: String, enum: ['draft', 'published'], default: 'draft' }
});

module.exports = mongoose.model('Value', valueSchema);