const mongoose = require('mongoose');

const PlanetSchema = new mongoose.Schema({
    name: String,
    climate: String,
    terrain: String,
    population: String,
    residents: [String],
    notableFeatures: [String]
});

module.exports = mongoose.model('Planet', PlanetSchema);
