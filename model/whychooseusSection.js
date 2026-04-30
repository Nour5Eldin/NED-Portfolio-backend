const mongoose = require('mongoose');

const featureItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' }
});

const whyChooseUsSchema = new mongoose.Schema({
    mainTitle: { type: String, default: "Why Choose NED ?" },
    mainImage: { type: String, required: true }, 
    features: [featureItemSchema],
    status: { type: String, enum: ['draft', 'published'], default: 'draft' }
});

module.exports = mongoose.model('WhyChooseUs', whyChooseUsSchema);