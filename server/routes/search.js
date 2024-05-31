const express = require('express');
const router = express.Router();
const Planet = require('../models/Planet');
const Person = require('../models/Person');
const Starship = require('../models/Starships');

router.get('/', async (req, res) => {
    const query = req.query.q;
    try {
        const planets = await Planet.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { climate: { $regex: query, $options: 'i' } },
                { terrain: { $regex: query, $options: 'i' } }
            ]
        });

        const people = await Person.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { gender: { $regex: query, $options: 'i' } },
                { homeworld: { $regex: query, $options: 'i' } }
            ]
        });

        const starships = await Starship.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { model: { $regex: query, $options: 'i' } },
                { manufacturer: { $regex: query, $options: 'i' } }
            ]
        });

        res.json({ planets, people, starships });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
