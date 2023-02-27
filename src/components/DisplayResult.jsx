import React from 'react';
import { useDispatch } from 'react-redux';
import {addCharacter} from '../features/starwars/starWarsSlice';

export function DisplayResult({characterData}) {
  const dispatch = useDispatch();
  const saveCharacter = () => {
    if (characterData) {
      dispatch(addCharacter(characterData))
    }
  };

  return(
    <div className="displayCard">
      <h3>{characterData.name}</h3>
      <p>Eye color: {characterData.eye_color}</p>
      <p>Hair color: {characterData.hair_color}</p>
      <p>Height: {characterData.height}</p>
      <p>Mass: {characterData.mass}</p>
      <button onClick={saveCharacter}>SAVE</button>
    </div>
  );
};
