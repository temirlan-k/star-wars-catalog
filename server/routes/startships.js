const express = require('express');
const router = express.Router();
const Starship = require('../models/Starships');

// Получение всех 
router.get('/', async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    try {
        const count = await Starship.countDocuments();
        const starships = await Starship.find()
            .skip((page - 1) * limit).limit(limit);
        res.json({
            starships,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const starship = await Starship.findById(req.params.id);
        if (!starship) {
            return res.status(404).json({ message: 'Nou found' });
        }
        res.json(starship);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
