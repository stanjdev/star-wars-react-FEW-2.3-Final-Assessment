import { configureStore } from '@reduxjs/toolkit';
import starWarsReducer from '../features/starwars/starWarsSlice';

export const store = configureStore({
  reducer: {
    starwars: starWarsReducer,
  },
});

