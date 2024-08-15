import React, { FC } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { TPlayAndPause } from "./types";

const PlayAndPause: FC<TPlayAndPause> = ({
  song,
  handlePause,
  handlePlay,
  activeSong,
  isPlaying,
}) =>
  isPlaying && activeSong?.title === song?.title ? (
    <PauseCircleIcon
      style={{ fontSize: "70px", color: "white", cursor: "pointer" }}
      onClick={handlePause}
    />
  ) : (
    <PlayCircleIcon
      style={{ fontSize: "70px", color: "whithe", cursor: "pointer" }}
      onClick={handlePlay}
    />
  );

export default PlayAndPause;
