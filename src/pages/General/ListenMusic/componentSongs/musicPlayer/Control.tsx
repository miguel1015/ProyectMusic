import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import { TControls } from "./types";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}: TControls) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      width: "9rem",
    }}
  >
    {repeat ? (
      <RepeatOneIcon
        sx={{
          fontSize: "28px",
          cursor: "pointer",
          display: "block",
        }}
        onClick={() => setRepeat((prev: boolean) => !prev)}
      />
    ) : (
      <RepeatIcon
        sx={{
          fontSize: "28px",
          cursor: "pointer",
          display: "block",
        }}
        onClick={() => setRepeat((prev: boolean) => !prev)}
      />
    )}

    {currentSongs?.length && (
      <SkipPreviousIcon
        sx={{ fontSize: "40px", cursor: "pointer" }}
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <PauseIcon
        sx={{ fontSize: "40px", cursor: "pointer" }}
        onClick={handlePlayPause}
      />
    ) : (
      <PlayArrowIcon
        sx={{ fontSize: "40px", cursor: "pointer" }}
        onClick={handlePlayPause}
      />
    )}
    {currentSongs?.length && (
      <SkipNextIcon
        sx={{ fontSize: "40px", cursor: "pointer" }}
        onClick={handleNextSong}
      />
    )}
    <ShuffleIcon
      sx={{
        fontSize: "28px",
        cursor: "pointer",
        color: `${shuffle ? "white" : "white"}`,
      }}
      onClick={() => setShuffle((prev: any) => !prev)}
    />
  </div>
);

export default Controls;
