const ContactInfo = require('../model/contactSection');
const Inquiry = require('../model/inquirySection');

exports.updateContactInfo = async (req, res) => {
    try {
        const info = await ContactInfo.findOneAndUpdate({}, req.body, {
            new: true,
            upsert: true
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