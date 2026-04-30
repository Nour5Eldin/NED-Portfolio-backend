const ContactInfo = require('../model/contactSection');
const Inquiry = require('../model/inquirySection');

exports.updateContactInfo = async (req, res) => {
    try {
        req.body.status = 'published';
        const info = await ContactInfo.findOneAndUpdate({}, req.body, {
            new: true,
            upsert: true,
            runValidators: true
        });
        res.status(200).json(info);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.sendInquiry = async (req, res) => {
    try {
        const newMsg = new Inquiry(req.body);
        await newMsg.save();
        res.status(201).json({ message: "inquiry Send Successfully" });
    } catch (err) {
        res.status(400).json(err);
    }
};


exports.getContactPage = async (req, res) => {
    try {
        const info = await ContactInfo.findOne();
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
};
exports.getInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.status(200).json(inquiries);
    } catch (err) {
        res.status(500).json({ message: "Error fetching inquiries", error: err.message });
    }
};
exports.deleteInquiry = async (req, res) => {
    try {
        const { id } = req.params;
        await Inquiry.findByIdAndDelete(id);
        res.status(200).json({ message: "Inquiry deleted successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
}