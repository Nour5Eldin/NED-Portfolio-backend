const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true }, 
    description: { type: String },
    category: { 
        type: String, 
        enum: ['residential', 'commercial', 'coastal'], 
        required: true 
    },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' }
});

module.exports = mongoose.model('Project', projectSchema);