const express = require('express');
const router = express.Router();
const aboutController = require('../controller/aboutController');
const upload = require('../middlewares/uploads');

router.get('/', aboutController.getAbout);
router.post('/', upload.single('image'), aboutController.createAbout);
router.put('/:id', upload.single('image'), aboutController.updateAbout);

module.exports = router;