const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    gender: String,
    birth_year: String,
});

module.exports = mongoose.model('Person', PersonSchema);
