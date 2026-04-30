const express = require('express');
const router = express.Router();
const valuesController = require('../controller/valuesController');

router.get('/', valuesController.getValues);
router.post('/', valuesController.createValue);
router.put('/:id', valuesController.updateValues);
module.exports = router;