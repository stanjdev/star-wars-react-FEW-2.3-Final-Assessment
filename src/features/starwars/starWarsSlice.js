import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
}

export const starWarsSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addCharacter: (state, action) => {state.value.unshift(action.payload)},
  }
})

export const {addCharacter} = starWarsSlice.actions;

export const selectCharacters = (state) => state.starwars.value;

export default starWarsSlice.reducer;
