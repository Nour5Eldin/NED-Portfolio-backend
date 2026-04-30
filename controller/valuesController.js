const Value = require('../model/valuesSection');

exports.getValues = async (req, res) => {
    try {
        const filter = {};
        if (req.query.mode !== 'admin') {
            filter.status = 'published';
        }
        const values = await Value.findOne(filter);
        if (!values && req.query.mode !== 'admin') {
            return res.status(404).json({ message: "No published Values section found" });
        }
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

exports.createValue = async (req, res) => {
    try {
        const newValue = new Value(req.body);
        const savedValue = await newValue.save();
        res.status(201).json(savedValue);
    } catch (error) {
        res.status(400).json({ message: "Error saving values", error: error.message });
    }
};
exports.updateHero = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedHero = await Hero.findOneAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedHero);
    } catch (error) {
        res.status(500).json({ message: "Error updating values", error: error.message });
    }
};