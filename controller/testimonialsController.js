const Testimonial = require('../model/testimonialsSection');

exports.getTestimonials = async (req, res) => {
    try {
        const filter = {};
        if (req.query.mode !== 'admin') {
            filter.status = 'published';
        }
        const testimonials = await Testimonial.find(filter);
        if (!testimonials && req.query.mode !== 'admin') {
            return res.status(404).json({ message: "No published Testimonials section found" });
        }
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

exports.createTestimonial = async (req, res) => {
    try {
        const newTestimonial = new Testimonial(req.body);
        const savedTestimonial = await newTestimonial.save();
        res.status(201).json(savedTestimonial);
    } catch (error) {
        res.status(400).json({ message: "Error saving testimonial", error: error.message });
    }
};
exports.updateTestimonial = async (req, res) => {
    try {
        const updated = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTestimonial = async (req, res) => {
    try {
        await Testimonial.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};