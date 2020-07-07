const express = require('express');
const router = express.Router();
const auth = require('../services/AuthService');
const criptoJS = require("crypto-js");

// POST /login
router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const result = await auth.login(username, criptoJS.MD5(password));
    if (!result) {
        return res.status(404).json({ error: 'Usuario not found!' })
    }
    return res.json({
        token: result
    });
});

module.exports = router;