const express = require('express');
const router = express.Router();
const projectsController = require('../controller/projectsSection');
const upload = require('../middlewares/uploads');

router.get('/', projectsController.getProjects);
router.post('/', upload.single('image'), projectsController.createProject);
router.put('/:id', upload.single('image'), projectsController.updateProject);
router.delete('/:id', projectsController.deleteProject);

module.exports = router;