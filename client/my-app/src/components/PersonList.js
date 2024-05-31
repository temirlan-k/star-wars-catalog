import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PersonList.css';

const PersonList = () => {
    const [persons, setPersons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/people?page=${currentPage}&limit=10`)
            .then(res => res.json())
            .then(data => {
                setPersons(data.persons);
                setTotalPages(data.totalPages);
            })
            .catch(error => console.error('Error fetching persons:', error));
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
        <div className="person-list-container">
            <h2 className='topic'>Characters</h2>
            <div className="person-list">
                {persons.map(person => (
                    <Link to={`/people/${person._id}`} key={person._id} className="person-card">
                        <h3>{person.name}</h3>
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

export default PersonList;
