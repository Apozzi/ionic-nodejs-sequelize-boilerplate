const express = require('express');
const router = express.Router();
const service = require('../services/ItemsService');

// GET /items
router.get('/', async (req, res) => {
    const Items = await service.findAll();
    res.json(Items);
});

// GET /items/:id
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id) || null;
    const Item = await service.findById(id);
    if (!Item) {
        return res.status(404).json({ error: 'Item not found!' })
    }
    return res.json(Item);
});

// POST /items
router.post('/', async (req, res) => {
    const result = await service.add(req.body);
    return res.json(result);
});

// PUT /items/:id
router.put('/:id', async (req, res) => {
    const result = await service.update(req.body);
    if (!result) {
        return res.status(404).json({ error: 'Item not found!' })
    }
    return res.json(result);
});

// DELETE /items/:id
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id) || null;
    const result = await service.deleteById(id);
    if (!result) {
        return res.status(404).json({ error: 'Item not found!' })
    }
    return res.json(result);
});

module.exports = router;