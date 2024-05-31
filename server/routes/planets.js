const express = require('express');
const router = express.Router();
const Planet = require('../models/Planet');

// Получение всех планет
router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const count = await Planet.countDocuments();
        const planets = await Planet.find()
            .skip((page - 1) * limit)
            .limit(limit);

        res.json({
            planets,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const planet = await Planet.findById(req.params.id);
        if (!planet) {
            return res.status(404).json({ message: 'Nou found' });
        }
        res.json(planet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
