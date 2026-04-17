const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

router.get('/info', contactController.getContactPage);
router.put('/info', contactController.updateContactInfo); 
router.post('/inquiry', contactController.sendInquiry);


module.exports = router;