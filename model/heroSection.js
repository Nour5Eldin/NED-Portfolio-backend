const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    subheading: String,
    title: String,
    description: String,
    image: String,
    buttons: [
        { text: String, link: String, type: { type: String } }
    ]
});

module.exports = mongoose.model('Hero', heroSchema);