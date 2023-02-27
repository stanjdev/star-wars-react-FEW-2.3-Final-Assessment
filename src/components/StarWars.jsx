import React, {useState} from 'react';
import { DisplayResult } from './DisplayResult';
import { useSelector } from 'react-redux';
import { selectCharacters } from '../features/starwars/starWarsSlice';
import { SavedCharacter } from './SavedCharacter';

export function StarWars() {
  const [characterId, setCharacterId] = useState('');
  const [characterData, setCharacterData] = useState('');
  const charactersList = useSelector(selectCharacters);

  const inputChange = (evt) => {
    setCharacterId(evt.target.value);
  };

  const query = async () => {
    if (characterId && ((characterId >= 1 && characterId <= 16) || (characterId >= 18 && characterId <= 83))) {
      try {
        const res = await fetch(`https://swapi.dev/api/people/${characterId}/`);
        const charData = await res.json();

        // Homeworld
        const homeWorldRes = await fetch(charData.homeworld);
        const homeWorldData = await homeWorldRes.json();
        charData.homeworld = homeWorldData;

        // Films
        const filmsRes = await Promise.all(charData.films.map((filmString) => fetch(filmString)));
        const filmsJSON = await Promise.all(filmsRes.map((res) => res.json()));
        charData.films = filmsJSON;

        setCharacterData(charData);
        setCharacterId('');
      } catch (error) {
        console.log("catch error:", error);
      }
    } else {
      alert('Error: characterId must be a number between 1 to 16, or 18 to 83!');
      setCharacterId('');
    }
  };

  const allCharacters = charactersList.map((character) => <SavedCharacter key={character.name} characterData={character} />)

  return(
    <div className='star-wars-container'>
      <div>
        <input
          onChange={inputChange}
          value={characterId}
          type="number"
          name="star-wars-character"
          id="star-wars-character"
          placeholder='character ID'
        />
        <button onClick={query}>Search</button>

        <h3>Current Search:</h3>
        <DisplayResult
          characterData={characterData}
        />
      </div>

      <div className='charactersList'>
        <h3>Saved Characters:</h3>
        {allCharacters}
      </div>
    </div>
  );
};

