import { TSonges } from "../../types";

export type TTracks = {
  activeSong?: TSonges;
  isPlaying?: boolean;
  isActive?: boolean;
};

export type TControls = {
  isPlaying: boolean;
  repeat: boolean;
  setRepeat: React.Dispatch<React.SetStateAction<boolean>>;
  shuffle: boolean;
  setShuffle: React.Dispatch<React.SetStateAction<boolean>>;
  currentSongs: string;
  handlePlayPause: () => void;
  handlePrevSong: () => void;
  handleNextSong: () => void;
};

export type TSeekbar = {
  value: number;
  min: string;
  max: number;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSeekTime: React.Dispatch<React.SetStateAction<number>>;
  appTime: number;
};

export type TPlayer = {
  activeSong: TSonges;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  onEnded: () => void;
  onTimeUpdate: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  onLoadedData: (event: React.SyntheticEvent<HTMLAudioElement>) => void;
  repeat: boolean;
};

export type TvolumeBar = {
  value: number;
  min: string;
  max: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setVolume: (volume: number) => void;
};
