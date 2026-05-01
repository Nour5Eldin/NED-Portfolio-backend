const WhyChooseUs = require('../model/whychooseusSection');

exports.getWhyChooseUs = async (req, res) => {
    try {
        const data = await WhyChooseUs.findOne();
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