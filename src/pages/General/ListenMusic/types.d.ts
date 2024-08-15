export type TSong = {
  key: string;
};
export type TState = {
  player: {
    activeSong: {
      key: string;
      value?: string;
      album: {
        cover?: string;
        cover_big?: string;
        cover_medium?: string;
        cover_small?: string;
        cover_xl?: string;
        id?: number;
        md5_image?: string;
        title?: string;
        tracklist?: string;
        type?: string;
      };
      artist: {
        id?: number;
        link?: string;
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
      time_add?: number;
      title?: string;
      title_short?: string;
      title_version?: string;
      type?: string;
    };
    isPlaying: boolean;
    genreListId?: string | any;
  };
};

export type TTopArtist = {
  key?: string;
  value?: string;
  album: {
    cover?: string;
    cover_big?: string;
    cover_medium?: string;
    cover_small?: string;
    cover_xl?: string;
    id?: number;
    md5_image?: string;
    title?: string;
    tracklist?: string;
    type?: string;
  };
  artist: {
    id?: number;
    link?: string;
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
  time_add?: number;
  title?: string;
  title_short?: string;
  title_version?: string;
  type?: string;
};

export type TSonges = {
  key: string;
  value?: string;
  album: {
    cover?: string;
    cover_big?: string;
    cover_medium?: string;
    cover_small?: string;
    cover_xl?: string;
    id?: number;
    md5_image?: string;
    title?: string;
    tracklist?: string;
    type?: string;
  };
  artist: {
    id?: number;
    link?: string;
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
  time_add?: number;
  title?: string;
  title_short?: string;
  title_version?: string;
  type?: string;
};

export type TSongID = {
  key: string;
  value?: string;
  release_date?: string;
  genres?: {
    primary: string;
  };
  album: {
    cover?: string;
    cover_big?: string;
    cover_medium?: string;
    cover_small?: string;
    cover_xl?: string;
    id?: number;
    md5_image?: string;
    title?: string;
    tracklist?: string;
    type?: string;
  };
  artist: {
    id?: number;
    link?: string;
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
  time_add?: number;
  title?: string;
  title_short?: string;
  title_version?: string;
  type?: string;
};

export type TDataArtistID = {
  id: number;
  link: string;
  name: string;
  nb_fan: string;
  nb_album: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  tracklist: string;
  type: string;
};

export type TDetailHeader = {
  artistId?: string | undefined | any;
  songData?: TSongID;
  dataArtistId?: TDataArtistID;
  dataAlbum?: any;
};

export type TStatePlayerMusic = {
  player: {
    activeSong: TSonges;
    currentSongs: string;
    currentIndex: number;
    isActive: boolean;
    isPlaying: boolean;
  };
};

export type TMusicPlayer = {
  dataPlayList?: TSonges[];
  setSeeReproductor?: any;
};
