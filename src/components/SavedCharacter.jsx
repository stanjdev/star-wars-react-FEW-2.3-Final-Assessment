import React from 'react';

export function SavedCharacter({characterData}) {

  const films = characterData.films.map((film, idx) => <p key={`${idx} ${film.episode_id}`}>{film.title}</p>)

  return(
    <div className='savedCharacter'>
      <h2><u>{characterData.name}</u></h2>
      <p>Height: {characterData.height}</p>
      <p>Mass: {characterData.mass}</p>
      <p>Hair color: {characterData.hair_color}</p>
      <p>Eye color: {characterData.eye_color}</p>

      <div className='homeworld-films'>
        <div className='homeworld'>
          <h3>Homeworld</h3>
          <p>{characterData.homeworld.name}</p>
          <p>climate: {characterData.homeworld.climate}</p>
          <p>diameter: {characterData.homeworld.diameter}</p>
          <p>gravity: {characterData.homeworld.gravity}</p>
        </div>

        <div className='films'>
          <h3>Films</h3>
          {films}
        </div>
      </div>
    </div>
  );
};
