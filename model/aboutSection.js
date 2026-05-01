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
    }
});

module.exports = mongoose.model('About', aboutSchema);