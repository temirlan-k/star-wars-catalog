import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './StarshipDetail.css';

const StarshipDetail = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/starships/${id}`)
            .then(res => res.json())
            .then(data => setStarship(data))
            .catch(error => console.error('Error fetching starship details:', error));
    }, [id]);

    if (!starship) {
        return <div>Loading...</div>;
    }

    return (
        <div className="starship-detail-container">
            <h2>{starship.name}</h2>
            <p><strong>Model:</strong> {starship.model}</p>
            <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
            <p><strong>Cost in Credits:</strong> {starship.cost_in_credits}</p>
            <p><strong>Length:</strong> {starship.length}</p>
            <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
            <p><strong>Crew:</strong> {starship.crew}</p>
            <p><strong>Passengers:</strong> {starship.passengers}</p>
            <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
            {/* Добавьте больше информации о звездолете по мере необходимости */}
        </div>
    );
};

export default StarshipDetail;
