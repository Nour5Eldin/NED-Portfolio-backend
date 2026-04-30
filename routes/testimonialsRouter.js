const express = require('express');
const router = express.Router();
const testimonialsController = require('../controller/testimonialsController');

router.get('/', testimonialsController.getTestimonials);
router.post('/', testimonialsController.createTestimonial);
router.put('/:id', testimonialsController.updateTestimonial);
router.delete('/:id', testimonialsController.deleteTestimonial);
module.exports = router;