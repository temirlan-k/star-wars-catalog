const mongoose = require('mongoose');

const StarshipSchema = new mongoose.Schema({
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    max_atmosphering_speed: String,
    crew: String,
    passengers: String,
    cargo_capacity: String,
    consumables: String,
    hyperdrive_rating: String,
    MGLT: String,
    starship_class: String,
});

module.exports = mongoose.model('Starship', StarshipSchema);
