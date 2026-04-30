const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const Project = require('./model/projectsSection');
const Inquiry = require('./model/inquirySection');

const heroRouter = require('./routes/heroRouter');
const aboutRouter = require('./routes/aboutRouter');
const valuesRouter = require('./routes/valuesRouter');
const projectsRouter = require('./routes/projectsRouter');
const testimonialsRouter = require('./routes/testimonialsRouter');
const contactRouter = require('./routes/contactRouter');
const whychooseusRouter = require('./routes/whychooseusRouter');

app.use(cors());
app.use(express.json());
app.use('/api/hero', heroRouter);
app.use('/api/about', aboutRouter);
app.use('/api/values', valuesRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/whychooseus', whychooseusRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/contact', contactRouter);

app.get('/admin/dashboard', async (req, res) => {
    try {
        const totalProjects = await Project.countDocuments({ status: 'published' });
        const unreadMessages = await Inquiry.countDocuments();
        res.status(200).json({ totalProjects, unreadMessages });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Server is running...');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});