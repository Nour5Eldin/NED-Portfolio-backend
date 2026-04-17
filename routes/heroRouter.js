const express = require('express');
const router = express.Router();
const heroController = require('../controller/heroController'); 
const upload = require('../middlewares/uploads');

router.get('/', heroController.getHero);

router.post('/', upload.single('image'), heroController.createHero); 

router.put('/:id', upload.single('image'), heroController.updateHero);

module.exports = router;