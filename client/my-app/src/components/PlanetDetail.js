import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PlanetDetail.css';

const PlanetDetail = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/planets/${id}`)
            .then(res => res.json())
            .then(data => setPlanet(data))
            .catch(error => console.error('Error fetching planet details:', error));
    }, [id]);

    if (!planet) {
        return <div>Loading...</div>;
    }

    return (
        <div className="planet-detail-container">
            <h2>{planet.name}</h2>
            <p><strong>Population:</strong> {planet.population}</p>
            <p><strong>Climate:</strong> {planet.climate}</p>
            <p><strong>Terrain:</strong> {planet.terrain}</p>
        </div>
    );
};

export default PlanetDetail;
