const Value = require('../model/valuesSection');

exports.getValues = async (req, res) => {
    try {
        const values = await Value.findOne();
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
exports.updateValues = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Value.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: "Error updating values", error: error.message });
    }
};