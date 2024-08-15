/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from "react";
import { TPlayer } from "./types";

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}: TPlayer) => {
  //Ref
  const ref: any = useRef(null);
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  //UseEffect.
  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.preview}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
