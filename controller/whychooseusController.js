const WhyChooseUs = require('../model/whychooseusSection');

exports.getWhyChooseUs = async (req, res) => {
    try {
        const { mode } = req.query;
        let filter = {};
        if (mode !== 'admin') {
            filter.status = 'published';
        }
        const data = await WhyChooseUs.findOne(filter);
        if(!data && mode !== 'admin') return res.status(404).json({message: "Content not found"})
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateWhyChooseUs = async (req, res) => {
    try {
        let updateData = { ...req.body };

        if (updateData.features && typeof updateData.features === 'string') {
            updateData.features = JSON.parse(updateData.features);
        }
        updateData.status = 'published';
        if (req.file) {
            updateData.mainImage = `/uploads/${req.file.filename}`;
        }
        const query = req.params.id ? { _id: req.params.id } : {};

        const data = await WhyChooseUs.findOneAndUpdate(query, updateData, {
            new: true,
            upsert: true,
            runValidators: true
        });
        
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};