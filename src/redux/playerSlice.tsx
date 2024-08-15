import { createSlice } from "@reduxjs/toolkit";

interface PlayerState {
  currentSongs: any[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: any;
  genreListId: string;
}

const initialState: PlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      if (action.payload.song?.preview) {
        state.currentSongs = action.payload.song?.preview;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.song?.preview;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (action.payload) {
        state.activeSong = action.payload;
        console.log("✅✅", state.activeSong);
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    // nextSong: (state, action) => {
    //   const index = action.payload; // Obtener el índice desde el `payload`

    //   if (index) {
    //     state.activeSong = index; // Cambiar la canción activa
    //     console.log("✅✅", state.activeSong);
    //     state.currentIndex = index; // Actualizar el índice
    //     state.isActive = true; // Asegurar que el reproductor está activo
    //   } else {
    //     console.error("Índice fuera de rango:", index); // Depuración
    //   }
    // },
    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]) {
        state.activeSong = state.currentSongs;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
