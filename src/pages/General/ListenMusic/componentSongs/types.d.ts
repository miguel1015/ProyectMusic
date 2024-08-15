import { TSonges } from "../types";

export type TRelatedSongs = {
  activeSong: TSonges;
  isPlaying: boolean;
  handlePauseClick: () => void;
  handlePlayClick: (song: TSonges, i: number) => void;
};

export type TAlbums = {
  activeSong: TSonges;
  isPlaying: boolean;
  handlePauseClick: () => void;
  handlePlayClick: (song: any, i: number) => void;
  dataAlbum: TDataAlbum;
};

export type TDataAlbum = {
  album?: any;
  artist?: {
    id?: number;
    name?: string;
    picture?: string;
    picture_big?: string;
    picture_medium?: string;
    picture_small?: string;
    picture_xl?: string;
    tracklist?: string;
    type?: string;
    uniqueProperty?: any;
  };
  available?: boolean;
  contributors?: [
    {
      id?: number;
      link?: string;
      name?: string;
      picture?: string;
      picture_big?: string;
      picture_medium?: string;
      picture_small?: string;
      picture_xl?: string;
      radio?: boolean;
      role?: string;
      share?: string;
      tracklist?: string;
      type?: string;
    }
  ];
  cover?: string;
  cover_big?: string;
  cover_meidum?: string;
  cover_small?: string;
  cover_xl?: string;
  duration?: number;
  explicit_content_cover?: number;
  explicit_content_lyrics?: number;
  explicit_lyrics?: boolean;
  fans?: number;
  genre_id?: number;
  genres?: {
    data?: [
      {
        id?: number;
        name?: string;
        picture?: string;
        type?: string;
      }
    ];
  };
  id?: number;
  label?: string;
  link?: string;
  md5_image?: string;
  record_type?: string;
  release_date?: string;
  nb_tracks?: number;
  share?: string;
  title?: string;
  tracklist?: string;
  tracks?: {
    data: [
      {
        album: {
          cover?: string;
          cover_big?: string;
          cover_meium?: string;
          cover_small?: string;
          cover_xl?: string;
          id?: number;
          md5_image?: string;
          title?: string;
          tracklist?: string;
          type?: string;
        };
        artist?: {
          id?: number;
          name?: string;
          tracklist?: string;
          type?: string;
        };
        duration?: number;
        explicit_content_cover?: number;
        explicit_content_lyrics?: number;
        explicit_lyrics?: boolean;
        id?: number;
        link?: string;
        md5_image?: string;
        preview?: string;
        rank?: number;
        readable: ?boolean;
        title?: string;
        title_short?: string;
        title_version?: string;
        type?: string;
      }
    ];
  };
  type?: string;
  upc?: string;
};

export type TSongCard = {
  song: TSonges;
  i: number;
  isPlaying: boolean;
  activeSong: TSonges;
  dataPlaylist: TSong;
};

export type TPlayAndPause = {
  song: TSonges;
  handlePause: () => void;
  handlePlay: () => void;
  activeSong: TSonges;
  isPlaying: boolean;
};
