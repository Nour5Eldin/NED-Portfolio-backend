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
    ]
});

module.exports = mongoose.model('Value', valueSchema);