const Hero = require('../model/heroSection');

exports.getHero = async (req, res) => {
    try {
        const hero = await Hero.findOne()

        return res.status(200).json({hero});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createHero = async (req, res) => {
    console.log("Data received from Postman:", req.body);
    try {
        const newHero = new Hero(req.body); 
        const savedHero = await newHero.save();
        res.status(201).json({ success: true, data: savedHero });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(400).json({ message: "Error saving data", error: error.message });
    }
};
exports.updateHero = async (req, res) => {
    try {
        const { id } = req.params; 
        let updateData = req.body;

        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;
        }
        const updatedHero = await Hero.findByIdAndUpdate(id, updateData, { new: true });
        
        if (!updatedHero) return res.status(200).json({});
        
        res.status(200).json(updatedHero);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};