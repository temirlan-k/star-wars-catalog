import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PersonDetail.css';

const PersonDetail = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/people/${id}`)
            .then(res => res.json())
            .then(data => setPerson(data))
            .catch(error => console.error('Error fetching person details:', error));
    }, [id]);

    if (!person) {
        return <div>Loading...</div>;
    }

    return (
        <div className="person-detail-container">
            <h2>{person.name}</h2>
            <p><strong>Birth Year:</strong> {person.birth_year}</p>
            <p><strong>Gender:</strong> {person.gender}</p>
            <p><strong>Height:</strong> {person.height}</p>
            <p><strong>Mass:</strong> {person.mass}</p>
            <p><strong>Hair Color:</strong> {person.hair_color}</p>
            <p><strong>Skin Color:</strong> {person.skin_color}</p>
            <p><strong>Birth Year:</strong> {person.birth_year}</p>
        </div>
    );
};

export default PersonDetail;
