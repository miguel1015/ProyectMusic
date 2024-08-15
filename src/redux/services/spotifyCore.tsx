import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://deezerdevs-deezer.p.rapidapi.com/playlist/4888783264";
const UrlTopCharts =
  "https://deezerdevs-deezer.p.rapidapi.com/playlist/11352171064";
const urlArtist =
  "https://deezerdevs-deezer.p.rapidapi.com/playlist/11915112501";
const urlRecommended =
  "https://deezerdevs-deezer.p.rapidapi.com/playlist/1306931615";

//Around
const urlColombia =
  "https://deezerdevs-deezer.p.rapidapi.com/playlist/1280403226";
const urlArgentina =
  "https://deezerdevs-deezer.p.rapidapi.com/playlist/1654853513";
const urlUnitedStates =
  "https://deezerdevs-deezer.p.rapidapi.com/playlist/1282523285";
const urltopArtistsFemale =
  "https://deezerdevs-deezer.p.rapidapi.com/playlist/3899320426";
const urlTopArtRock =
  "https://deezerdevs-deezer.p.rapidapi.com/playlist/3899320426";

// Agrega el proxy CORS Anywhere
const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";

export const spotifyCore = createApi({
  reducerPath: "spotifyCore",
  baseQuery: fetchBaseQuery({
    baseUrl: corsProxyUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "1632978a81mshb5ea885bf89c942p1df900jsn3da23c258260"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopPlaylist: builder.query<any, void>({
      query: () => url,
    }),
    getTopCharts: builder.query<any, void>({
      query: () => UrlTopCharts,
    }),
    getArtist: builder.query<any, void>({
      query: () => urlArtist,
    }),
    getSongsRecommended: builder.query<any, void>({
      query: () => urlRecommended,
    }),
    getAroundColombia: builder.query<any, void>({
      query: () => urlColombia,
    }),
    getAroundArgentina: builder.query<any, void>({
      query: () => urlArgentina,
    }),
    getAroundUnitedStates: builder.query<any, void>({
      query: () => urlUnitedStates,
    }),
    getTopArtistsFemale: builder.query<any, void>({
      query: () => urltopArtistsFemale,
    }),
    getTopArtistRocket: builder.query<any, void>({
      query: () => urltopArtistsFemale,
    }),
    getSongDetails: builder.query({
      query: ({ songId }: any) =>
        `https://deezerdevs-deezer.p.rapidapi.com/track/${songId}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId: any) =>
        `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistId}`,
    }),
    getArtistSongs: builder.query({
      query: (artistId: any) =>
        `http://localhost:9000/deezer-proxy/${artistId}/top?limit=50`,
    }),
    getSongsByGenre: builder.query({
      query: (genre: any) =>
        `https://deezerdevs-deezer.p.rapidapi.com/genre/${genre}`,
    }),
    getSongsBySearch: builder.query({
      query: (search: any) =>
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`,
    }),
    getAlbumDetails: builder.query({
      query: ({ albumId }: any) =>
        `https://deezerdevs-deezer.p.rapidapi.com/album/${albumId}`,
    }),
  }),
});

export const {
  useGetTopPlaylistQuery,
  useGetTopChartsQuery,
  useGetArtistQuery,
  useGetSongDetailsQuery,
  useGetSongsRecommendedQuery,
  useGetArtistDetailsQuery,
  useGetArtistSongsQuery,
  useGetAroundColombiaQuery,
  useGetAroundArgentinaQuery,
  useGetAroundUnitedStatesQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
  useGetAlbumDetailsQuery,
  useGetTopArtistsFemaleQuery,
  useGetTopArtistRocketQuery,
} = spotifyCore;
