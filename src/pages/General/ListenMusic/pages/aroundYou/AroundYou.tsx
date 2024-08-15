/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import SideBar from "../../SideBar/SideBar";
import {
  useGetAroundArgentinaQuery,
  useGetAroundColombiaQuery,
  useGetAroundUnitedStatesQuery,
} from "@/redux/services/spotifyCore";
import "swiper/css";
import "swiper/css/free-mode";
import { playPause, setActiveSong } from "@/redux/playerSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import Link from "next/link";
import PlayAndPause from "../../componentSongs/PlayAndPause";

type Song = {
  key: string;
};

interface RootState {
  player: {
    activeSong: any;
    isPlaying: boolean;
  };
}

export default function AroundYou() {
  //Uso del dispatch.
  const dispatch = useDispatch();

  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player
  );

  //Uso de las query.
  const { data: initialAroundColombia } = useGetAroundColombiaQuery();
  const { data: initialAroundArgentina } = useGetAroundArgentinaQuery();
  const { data: initialAroundUnitedStates } = useGetAroundUnitedStatesQuery();

  //UseState.
  const [songsAroundColombia, setSongsAroundColombia] = useState<Song[]>([]);
  const [songsAroundArgentina, setSongsAroundArgentina] = useState<Song[]>([]);
  const [songsAroundUnitedStates, setSongsAroundUnitedStates] = useState<
    Song[]
  >([]);

  //Función para que salgan las canciones aleatorias.
  const getRandomSongs = (data: Song[], count: number): Song[] => {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, count);
  };
  console.log(initialAroundUnitedStates);

  //useEffects.
  useEffect(() => {
    if (initialAroundColombia?.tracks?.data) {
      const randomSongs = getRandomSongs(initialAroundColombia.tracks.data, 10);
      setSongsAroundColombia(randomSongs);
    }
  }, [initialAroundColombia]);

  useEffect(() => {
    if (initialAroundArgentina?.tracks?.data) {
      const randomSongs = getRandomSongs(
        initialAroundArgentina.tracks.data,
        10
      );
      setSongsAroundArgentina(randomSongs);
    }
  }, [initialAroundArgentina]);
  useEffect(() => {
    if (initialAroundUnitedStates?.tracks?.data) {
      const randomSongs = getRandomSongs(
        initialAroundUnitedStates.tracks.data,
        10
      );
      setSongsAroundUnitedStates(randomSongs);
    }
  }, [initialAroundUnitedStates]);

  //Funciones para cambiar botón.
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song: any, i: number) => {
    dispatch(setActiveSong({ song, i }));
    dispatch(playPause(true));
  };

  //Estilos
  const styles = {
    containerGeneral: {
      display: "flex",
      flexDirection: "column",
      width: "95%",
      padding: "4px",
      backgroundColor: "#4b7a99",
      backdropFilter: "blur(4px)",
      borderRadius: "0.375rem",
    },

    boxPlay: {
      position: "absolute",
      inset: "0",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        ...(activeSong?.title === activeSong?.title
          ? { display: "flex", backgroundColor: "black", opacity: 0.7 }
          : { display: "none" }),
      },
    },
    boxCard: {
      position: "relative",
      width: "100%",
      height: "100%",
    },
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SideBar />
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top hits Colombia */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2
              style={{
                fontWeight: "700",
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                textAlign: "left",
                marginTop: "16px",
                marginBottom: "40px",
                marginLeft: "40px",
              }}
            >
              Top hits Colombia
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {songsAroundColombia ? (
                <Swiper
                  slidesPerView="auto"
                  spaceBetween={7}
                  freeMode
                  centeredSlides
                  centeredSlidesBounds
                >
                  {songsAroundColombia?.map((song: any, i: number) => (
                    <SwiperSlide
                      key={song?.key}
                      style={{
                        width: "15%",
                        height: "auto",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "50%",
                        animation: "slideright 0.3s ease",
                      }}
                    >
                      <Box sx={{ ...styles.containerGeneral }}>
                        <Box sx={{ ...styles.boxCard }}>
                          <Box sx={{ ...styles.boxPlay }}>
                            <PlayAndPause
                              isPlaying={isPlaying}
                              activeSong={activeSong}
                              song={song}
                              handlePause={handlePauseClick}
                              handlePlay={() => handlePlayClick(song, i)}
                            />
                          </Box>
                          <img
                            src={song?.album?.cover_big}
                            alt="Name"
                            style={{
                              borderRadius: "0.5rem",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Link
                            href="/General/ListenMusic/pages/SongsDetails/[songId].js"
                            as={`/General/ListenMusic/pages/SongsDetails/${song?.id}`}
                            style={{
                              fontWeight: "600",
                              fontSize: "1.10rem ",
                              color: "#fff",
                              textDecoration: "none",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {song.title}
                          </Link>
                          <Link
                            href="/General/ListenMusic/pages/ArtistDetails/[artistId].js"
                            as={`/General/ListenMusic/pages/ArtistDetails/${song?.artist?.id}`}
                            style={{
                              fontSize: "1rem",
                              textDecoration: "none",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              color: "#d2d6dc",
                              marginTop: "0.25rem",
                            }}
                          >
                            {song?.artist?.name}
                          </Link>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <CircularProgress
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                />
              )}
            </div>
          </div>

          {/* Top hits Argentina */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2
              style={{
                fontWeight: "700",
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                textAlign: "left",
                marginTop: "16px",
                marginBottom: "40px",
                marginLeft: "40px",
              }}
            >
              Top hits Argentina
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {songsAroundArgentina ? (
                <Swiper
                  slidesPerView="auto"
                  spaceBetween={7}
                  freeMode
                  centeredSlides
                  centeredSlidesBounds
                >
                  {songsAroundArgentina?.map((song: any, i: number) => (
                    <SwiperSlide
                      key={song?.key}
                      style={{
                        width: "15%",
                        height: "auto",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "50%",
                        animation: "slideright 0.3s ease",
                      }}
                    >
                      <Box sx={{ ...styles.containerGeneral }}>
                        <Box sx={{ ...styles.boxCard }}>
                          <Box sx={{ ...styles.boxPlay }}>
                            <PlayAndPause
                              isPlaying={isPlaying}
                              activeSong={activeSong}
                              song={song}
                              handlePause={handlePauseClick}
                              handlePlay={() => handlePlayClick(song, i)}
                            />
                          </Box>
                          <img
                            src={song?.album?.cover_big}
                            alt="Name"
                            style={{
                              borderRadius: "0.5rem",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Link
                            href="/General/ListenMusic/pages/SongsDetails/[songId].js"
                            as={`/General/ListenMusic/pages/SongsDetails/${song?.id}`}
                            style={{
                              fontWeight: "600",
                              fontSize: "1.10rem ",
                              color: "#fff",
                              textDecoration: "none",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {song.title}
                          </Link>
                          <Link
                            href="/General/ListenMusic/pages/ArtistDetails/[artistId].js"
                            as={`/General/ListenMusic/pages/ArtistDetails/${song?.artist?.id}`}
                            style={{
                              fontSize: "1rem",
                              textDecoration: "none",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              color: "#d2d6dc",
                              marginTop: "0.25rem",
                            }}
                          >
                            {song?.artist?.name}
                          </Link>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <CircularProgress
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                />
              )}
            </div>
          </div>
          {/* Top hits E.E.U.U */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2
              style={{
                fontWeight: "700",
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                textAlign: "left",
                marginTop: "16px",
                marginBottom: "40px",
                marginLeft: "40px",
              }}
            >
              Top hits E.E.U.U
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {songsAroundUnitedStates ? (
                <Swiper
                  slidesPerView="auto"
                  spaceBetween={7}
                  freeMode
                  centeredSlides
                  centeredSlidesBounds
                >
                  {songsAroundUnitedStates?.map((song: any, i: number) => (
                    <SwiperSlide
                      key={song?.key}
                      style={{
                        width: "15%",
                        height: "auto",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "50%",
                        animation: "slideright 0.3s ease",
                      }}
                    >
                      <Box sx={{ ...styles.containerGeneral }}>
                        <Box sx={{ ...styles.boxCard }}>
                          <Box sx={{ ...styles.boxPlay }}>
                            <PlayAndPause
                              isPlaying={isPlaying}
                              activeSong={activeSong}
                              song={song}
                              handlePause={handlePauseClick}
                              handlePlay={() => handlePlayClick(song, i)}
                            />
                          </Box>
                          <img
                            src={song?.album?.cover_big}
                            alt="Name"
                            style={{
                              borderRadius: "0.5rem",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Link
                            href="/General/ListenMusic/pages/SongsDetails/[songId].js"
                            as={`/General/ListenMusic/pages/SongsDetails/${song?.id}`}
                            style={{
                              fontWeight: "600",
                              fontSize: "1.10rem ",
                              color: "#fff",
                              textDecoration: "none",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {song.title}
                          </Link>
                          <Link
                            href="/General/ListenMusic/pages/ArtistDetails/[artistId].js"
                            as={`/General/ListenMusic/pages/ArtistDetails/${song?.artist?.id}`}
                            style={{
                              fontSize: "1rem",
                              textDecoration: "none",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              color: "#d2d6dc",
                              marginTop: "0.25rem",
                            }}
                          >
                            {song?.artist?.name}
                          </Link>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <CircularProgress
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
