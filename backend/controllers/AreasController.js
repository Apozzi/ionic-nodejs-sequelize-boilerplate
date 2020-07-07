const express = require('express');
const router = express.Router();
const service = require('../services/AreasService');

// GET /areas
router.get('/', async (req, res) => {
    const Areas = await service.findAll();
    res.json(Areas);
});

// GET /areas/:id
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id) || null;
    const Area = await service.findById(id);
    if (!Area) {
        return res.status(404).json({ error: 'Area not found!' })
    }
    return res.json(Area);
});

// POST /areas
router.post('/', async (req, res) => {
    const result = await service.add(req.body);
    return res.json(result);
});

// PUT /areas/:id
router.put('/:id', async (req, res) => {
    const result = await service.update(req.body);
    if (!result) {
        return res.status(404).json({ error: 'Area not found!' })
    }
    return res.json(result);
});

// DELETE /areas/:id
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id) || null;
    const result = await service.deleteById(id);
    if (!result) {
        return res.status(404).json({ error: 'Area not found!' })
    }
    return res.json(result);
});

module.exports = router;