const About = require('../model/aboutSection');

exports.getAbout = async (req, res) => {
    try {
        const about = await About.findOne();
        res.status(200).json(about);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createAbout = async (req, res) => {
    try {
        const aboutData = { ...req.body };

        if (req.file) {
            aboutData.image = `/uploads/${req.file.filename}`;
        }
        if (typeof aboutData.items === 'string') {
            aboutData.items = JSON.parse(aboutData.items);
        }

        const newAbout = new About(aboutData);
        const savedAbout = await newAbout.save();
        res.status(201).json(savedAbout);
    } catch (error) {
        res.status(400).json({ message: "Error saving About data", error: error.message });
    }
};
exports.updateAbout = async (req, res) => {
    try {
        const { id } = req.params;

        let updateData = { ...req.body };

        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;
        }
        if (updateData.items && typeof updateData.items === 'string') {
            updateData.items = JSON.parse(updateData.items);
        }
        const updated = await About.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "About section not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: updated
        });

    } catch (error) {
        console.error("Update Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};