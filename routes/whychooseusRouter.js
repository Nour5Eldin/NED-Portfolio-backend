const express = require('express');
const router = express.Router();
const whyChooseUsController = require('../controller/whychooseusController');
const upload = require('../middlewares/uploads'); 

router.get('/', whyChooseUsController.getWhyChooseUs);
router.put('/:id', upload.single('mainImage'), whyChooseUsController.updateWhyChooseUs);
router.post('/', upload.single('mainImage'), whyChooseUsController.updateWhyChooseUs);
module.exports = router;