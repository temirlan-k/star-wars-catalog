import React, { useState } from 'react';
import axios from 'axios';
import './SearchComponent.css'; 

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        try {
            setLoading(true); // Устанавливаем состояние загрузки перед отправкой запроса
            const response = await axios.get(`http://127.0.0.1:5000/api/search?q=${searchQuery}`);
            setSearchResults(response.data); // Ожидается, что результаты будут приходить в формате { planets: [], people: [], starships: [] }
        } catch (error) {
            console.error('Error searching:', error);
        } finally {
            setLoading(false); // Сбрасываем состояние загрузки после получения ответа
        }
    };

    return (
        <div className="search-container">
            <h3>Search Planets, Persons, and Starships...</h3>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch} disabled={loading}>Search</button>
            {loading && <p className="loading">Loading...</p>}
            <div className="results-container">
                {searchResults.planets && (
                    <div className="result-category">
                        <h2>Planets</h2>
                        {searchResults.planets.length > 0 ? (
                            searchResults.planets.map(planet => (
                                <div key={planet._id} className="result-item">
                                    <p><strong>Name:</strong> {planet.name}</p>
                                    {/* Другие поля, которые вы хотите отобразить */}
                                </div>
                            ))
                        ) : (
                            <p>Not Found</p>
                        )}
                    </div>
                )}
                {searchResults.people && (
                    <div className="result-category">
                        <h2>Persons</h2>
                        {searchResults.people.length > 0 ? (
                            searchResults.people.map(person => (
                                <div key={person._id} className="result-item">
                                    <p><strong>Name:</strong> {person.name}</p>
                                    {/* Другие поля, которые вы хотите отобразить */}
                                </div>
                            ))
                        ) : (
                            <p>Not Found</p>
                        )}
                    </div>
                )}
                {searchResults.starships && (
                    <div className="result-category">
                        <h2>StarShips</h2>
                        {searchResults.starships.length > 0 ? (
                            searchResults.starships.map(starship => (
                                <div key={starship._id} className="result-item">
                                    <p><strong>Name:</strong> {starship.name}</p>
                                    {/* Другие поля, которые вы хотите отобразить */}
                                </div>
                            ))
                        ) : (
                            <p>Not Found</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchComponent;
