const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

router.get('/info', contactController.getContactPage);
router.put('/info', contactController.updateContactInfo); 
router.post('/inquiry', contactController.sendInquiry);
router.get('/inquiries', contactController.getInquiries);
router.delete('/inquiries/:id', contactController.deleteInquiry);

module.exports = router;