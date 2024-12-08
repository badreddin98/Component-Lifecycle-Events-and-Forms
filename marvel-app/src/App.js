import React, { useState } from 'react';
import './App.css';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const handleSelectCharacter = (characterId) => {
    setSelectedCharacterId(characterId);
  };

  return (
    <div className="App">
      <h1>Marvel Characters</h1>
      <CharacterList onSelectCharacter={handleSelectCharacter} />
      <CharacterDetail characterId={selectedCharacterId} />
    </div>
  );
}

export default App;
