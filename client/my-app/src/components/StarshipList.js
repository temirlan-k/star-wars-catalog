import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StarshipsList.css';

const StarshipList = () => {
    const [starships, setStarships] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/starships?page=${currentPage}&limit=10`)
            .then(res => res.json())
            .then(data => {
                setStarships(data.starships);
                setTotalPages(data.totalPages);
            })
            .catch(error => console.error('Error fetching starships:', error));
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
        <div className="starship-list-container">
            <h2>Starships</h2>
            <div className="starship-list">
                {starships.map(starship => (
                    <Link to={`/starships/${starship._id}`} key={starship._id} className="starship-card">
                        <h3>{starship.name}</h3>
                        <p><strong>Model:</strong> {starship.model}</p>
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

export default StarshipList;
