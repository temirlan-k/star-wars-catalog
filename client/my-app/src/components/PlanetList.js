import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PlanetList.css';

const PlanetList = () => {
    const [planets, setPlanets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/planets?page=${currentPage}&limit=10`)
            .then(res => res.json())
            .then(data => {
                setPlanets(data.planets);
                setTotalPages(data.totalPages);
            })
            .catch(error => console.error('Error fetching planets:', error));
    }, [currentPage]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="planet-list-container">
            <h2 className='topic'>Planets</h2>
            <div className="planet-list">
                {planets.map(planet => (
                    <Link to={`/planets/${planet._id}`} key={planet._id} className="planet-card">
                        <h3>{planet.name}</h3>
                    </Link>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PlanetList;
