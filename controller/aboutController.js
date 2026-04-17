const About = require('../model/aboutSection');

exports.getAbout = async (req, res) => {
    try {
        const about = await About.findOne();
        res.status(200).json(about);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
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
        if (!req.file) {
            console.log("Multer: No file received.");
        } else {
            console.log("Multer: File received successfully ->", req.file.filename);
        }

        let updateData = { ...req.body };

        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;
        }
        if (updateData.items && typeof updateData.items === 'string') {
            try {
                updateData.items = JSON.parse(updateData.items);
            } catch (parseError) {
                return res.status(400).json({ message: "Invalid JSON format for items" });
            }
        }
        const updated = await About.findByIdAndUpdate(
            id, 
            updateData, 
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "About section record not found" });
        }

        res.status(200).json(updated);
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};