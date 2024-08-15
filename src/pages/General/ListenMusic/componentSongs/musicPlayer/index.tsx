/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, SyntheticEvent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
  nextSong,
  prevSong,
  playPause,
} from "../../../../../redux/playerSlice";
import Controls from "./Control";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";
import { Grid } from "@mui/material";
import { TMusicPlayer, TSonges, TStatePlayerMusic } from "../../types";
import { styles } from "./styled";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

const MusicPlayer = ({ dataPlayList, setSeeReproductor }: TMusicPlayer) => {
  //Redux.
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state: TStatePlayerMusic) => state.player);
  const dispatch = useDispatch();

  //UseState.
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [songNext, setSongNext] = useState<any>();

  // useEffect(() => {
  //   if (dataPlayList && dataPlayList.length > 0) {
  //     const nextIndex = (currentIndex + 1) % dataPlayList?.length;
  //     const nextSong = dataPlayList[nextIndex];
  //     setSongNext(nextSong);
  //   } else {
  //     console.error("dataPlayList no tiene suficientes canciones.");
  //   }
  // }, [dataPlayList, currentIndex, nextSong]);

  useEffect(() => {
    if (dataPlayList && dataPlayList.length > 0) {
      const nextIndex = (currentIndex + 1) % dataPlayList.length; // Encuentra el siguiente índice
      const nextSong = dataPlayList[nextIndex]; // Obtiene el objeto de la canción siguiente
      setSongNext(nextSong); // Guarda el objeto en songNext
    } else {
    }
  }, [dataPlayList, currentIndex]);

  // UseEffect.
  useEffect(() => {
    if (currentSongs?.length) dispatch(playPause(true));
  }, [currentSongs]);

  //Funciones para reproducir las canciones.
  const handlePlayPause = () => {
    if (!isActive) return;
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(true));

    if (!shuffle) {
      dispatch(nextSong(songNext));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  // Función para retroceder una canción.
  const handlePrevSong = () => {
    if (currentIndex) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  //Funciones para modificar volumen.
  const handleSeekTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSeekTime(Number(event.target.value));
  };
  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };

  /**
   * Función para cerrar el reproductor
   */
  const handleClose = () => {
    setSeeReproductor(false);
  };

  return (
    <>
      <Grid container sx={styles.boxGeneral}>
        <Grid item xs={12} sm={4.5} md={4} lg={4} xl={4}>
          <Track
            isPlaying={isPlaying}
            isActive={isActive}
            activeSong={activeSong}
          />
        </Grid>
        <Grid
          item
          xs={7}
          sm={4.5}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Controls
            isPlaying={isPlaying}
            // isActive={isActive}
            repeat={repeat}
            setRepeat={setRepeat}
            shuffle={shuffle}
            setShuffle={setShuffle}
            currentSongs={currentSongs}
            handlePlayPause={handlePlayPause}
            handlePrevSong={handlePrevSong}
            handleNextSong={handleNextSong}
          />
          <Seekbar
            value={appTime}
            min="0"
            max={duration}
            onInput={handleSeekTimeChange}
            setSeekTime={setSeekTime}
            appTime={appTime}
          />
          <Player
            activeSong={activeSong}
            volume={volume}
            isPlaying={isPlaying}
            seekTime={seekTime}
            repeat={repeat}
            // currentIndex={currentIndex}
            onEnded={handleNextSong}
            onTimeUpdate={(event: SyntheticEvent<HTMLAudioElement>) => {
              setAppTime((event.currentTarget as HTMLAudioElement).currentTime);
            }}
            onLoadedData={(event: SyntheticEvent<HTMLAudioElement>) => {
              setDuration((event.currentTarget as HTMLAudioElement).duration);
            }}
          />
        </Grid>
        <Grid xs={5} sm={3} md={4} lg={4} xl={4}>
          <VolumeBar
            value={volume}
            min="0"
            max="1"
            onChange={handleVolumeChange}
            setVolume={setVolume}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "10px 20px 0px 20px",
        }}
      >
        <Tooltip title="Cerrar" placement="top">
          <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
        </Tooltip>
      </Box>
    </>
  );
};

export default MusicPlayer;
