const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// Получение всех 
router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    try {

        const count = await Person.countDocuments();
        const persons = await Person.find()
            .skip((page - 1) * limit).limit(limit);
        res.json({
            persons,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            return res.status(404).json({ message: 'Nou found' });
        }
        res.json(person);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
