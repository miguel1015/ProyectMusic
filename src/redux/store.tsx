import { configureStore } from '@reduxjs/toolkit';

import { spotifyCore } from './services/spotifyCore';
import playerReducer from './playerSlice';

export const store = configureStore({
  reducer: {
    [spotifyCore.reducerPath]: spotifyCore.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyCore.middleware)
});