const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const Planet = require('./models/Planet');
const Person = require('./models/Person'); 
const planetsRouter = require('./routes/planets');
const peopleRouter = require('./routes/person');
const starshipsRouter = require('./routes/startships')
const searchRouter = require('./routes/search')
const Starship = require('./models/Starships');

const cors = require('cors')

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const loadPlanetsFromSWAPI = async () => {
    let url = 'https://swapi.dev/api/planets/';
    try {
        while (url) {
            const response = await axios.get(url);
            const planets = response.data.results;
            for (const planetData of planets) {
                const planet = new Planet({
                    name: planetData.name,
                    climate: planetData.climate,
                    terrain: planetData.terrain,
                    population: planetData.population,
                    residents: planetData.residents,
                    notableFeatures: []
                });
                await planet.save();
            }
            url = response.data.next;
            console.log(`Next URL for planets: ${url}`);
        }
        console.log('All planets loaded into MongoDB');
    } catch (error) {
        console.error('Error loading planets from SWAPI:', error);
    }
};

const loadPeopleFromSWAPI = async () => {
    let url = 'https://swapi.dev/api/people/';
    try {
        while (url) {
            const response = await axios.get(url);
            const people = response.data.results;
            for (const peopleData of people) {
                const person = new Person({
                    name: peopleData.name,
                    height: peopleData.height,
                    mass: peopleData.mass,
                    hair_color: peopleData.hair_color,
                    skin_color: peopleData.skin_color,
                    gender: peopleData.gender,
                    birth_year: peopleData.birth_year
                });
                await person.save();
            }
            url = response.data.next;
            console.log(`Next URL for people: ${url}`);
        }
        console.log('All people loaded into MongoDB');
    } catch (error) {
        console.error('Error loading people from SWAPI:', error);
    }
};


const loadStarShipsFromSWAPI = async () => {
    let url = 'https://swapi.dev/api/starships/';
    try {
        while (url) {
            const response = await axios.get(url);
            const starships = response.data.results;
            for (const starshipData of starships) {
                const starship = new Starship({
                    name: starshipData.name,
                    model: starshipData.model,
                    manufacturer: starshipData.manufacturer,
                    cost_in_credits: starshipData.cost_in_credits,
                    length: starshipData.length,
                    max_atmosphering_speed: starshipData.max_atmosphering_speed,
                    crew: starshipData.crew,
                    passengers: starshipData.passengers,
                    cargo_capacity: starshipData.cargo_capacity,
                    consumables: starshipData.consumables,
                    hyperdrive_rating: starshipData.hyperdrive_rating,
                    MGLT: starshipData.MGLT,
                    starship_class: starshipData.starship_class,
                });
                await starship.save();
            }
            url = response.data.next;
            console.log(`Next URL for people: ${url}`);
        }
        console.log('All people loaded into MongoDB');
    } catch (error) {
        console.error('Error loading people from SWAPI:', error);
    }
};




// Запускаем загрузку данных только если база данных пустая
db.once('open', async () => {
    const planetCount = await Planet.countDocuments();
    const peopleCount = await Person.countDocuments();
    const starshipCount = await Starship.countDocuments();

    if (planetCount === 0) {
        await loadPlanetsFromSWAPI();
    } else if (starshipCount === 0) {
        await loadStarShipsFromSWAPI();
    } else if (peopleCount === 0) {
        await loadPeopleFromSWAPI();
    }
});

app.use('/api/planets', planetsRouter);
app.use('/api/people', peopleRouter);
app.use('/api/starships', starshipsRouter);
app.use('/api/search', searchRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
