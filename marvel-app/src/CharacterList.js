import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = ({ onSelectCharacter }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
                    params: {
                        ts: 1,
                        apikey: 'aadf2ec9230c5a7e98f64c8da4a97a59',
                        hash: 'd1e3f929cd8d313c50831a1d97ebf9f0'
                    }
                });
                console.log('Fetched characters:', response.data.data.results); // Log the fetched data
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="character-list">
            {characters.map(character => (
                <div key={character.id} className="character-item" onClick={() => onSelectCharacter(character.id)}>
                    <h3>{character.name}</h3>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                </div>
            ))}
        </div>
    );
};

export default CharacterList;
