const express = require('express');
const router = express.Router();
const service = require('../services/DepositosService');

// GET /depositos
router.get('/', async (req, res) => {
    const Depositos = await service.findAll();
    res.json(Depositos);
});

// GET /depositos/:id
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id) || null;
    const Deposito = await service.findById(id);
    if (!Deposito) {
        return res.status(404).json({ error: 'Deposito not found!' })
    }
    return res.json(Deposito);
});

// POST /depositos
router.post('/', async (req, res) => {
    const result = await service.add(req.body);
    return res.json(result);
});

// PUT /depositos/:id
router.put('/:id', async (req, res) => {
    const result = await service.update(req.body);
    if (!result) {
        return res.status(404).json({ error: 'Deposito not found!' })
    }
    return res.json(result);
});

// DELETE /depositos/:id
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id) || null;
    const result = await service.deleteById(id);
    if (!result) {
        return res.status(404).json({ error: 'Deposito not found!' })
    }
    return res.json(result);
});

module.exports = router;