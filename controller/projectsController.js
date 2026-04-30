const Project = require('../model/projectsSection');
const fs = require('fs');
const path = require('path');

exports.getProjects = async (req, res) => {
    try {
        const { category, mode } = req.query;
        let filter = {};
        if (mode !== 'admin') {
            filter.status = 'published';
        }
        if (category) {
            filter.category = category;
        }
        const projects = await Project.find(filter).sort({ createdAt: 1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createProject = async (req, res) => {
    try {
        const projectData = {
            ...req.body,
            image: req.file ? `/uploads/${req.file.filename}` : '' 
        };
        const newProject = new Project(projectData);
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const id = req.params.id;
        req.body.status = 'published';
        const project = await Project.findById(id);

        if (req.file) { 
            if (project.image) {
                const oldPath = path.join(__dirname, '..', project.image);
                if (fs.existsSync(oldPath)) {
                    fs.unlinkSync(oldPath); 
                }
            }
            req.body.image = `/uploads/${req.file.filename}`;
        }

        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await Project.findByIdAndDelete(id);
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};