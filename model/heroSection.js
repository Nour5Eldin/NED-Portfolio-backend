const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    subheading: String,
    title: String,
    description: String,
    image: String,
    buttons: [
        { text: String, link: String, type: { type: String } }
    ],
    status: { type: String, enum: ['draft', 'published'], default: 'draft' }
});

module.exports = mongoose.model('Hero', heroSchema);