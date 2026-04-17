const express = require('express');
const router = express.Router();
const testimonialsController = require('../controller/testimonialsController');

router.get('/', testimonialsController.getTestimonials);
router.post('/', testimonialsController.createTestimonial);

module.exports = router;