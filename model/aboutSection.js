const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    experienceYears: String,
    image: String,
    items: {
        ourVision: {
            title: String,
            text: String
        },
        ourMission: {
            title: String,
            text: String
        }
    },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' }
});

module.exports = mongoose.model('About', aboutSchema);