/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../../SideBar/SideBar";
import { useRouter } from "next/router";
import {
  useGetArtistDetailsQuery,
  useGetArtistQuery,
  useGetArtistSongsQuery,
} from "@/redux/services/spotifyCore";
import DetailsHeader from "../../componentSongs/DetailsHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { SongCard } from "../../componentSongs/SongCard";
import { Box, CircularProgress, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import MusicPlayer from "../../componentSongs/musicPlayer";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { TSonges, TState, TTopArtist } from "../../types";
import { usePathname } from "next/navigation";

export default function ArtistDetails() {
  //Router.
  const router = useRouter();
  const { artistId } = router.query;

  //Redux.
  const { activeSong, isPlaying } = useSelector(
    (state: TState) => state.player
  );

  //Querys.
  const { data: dataArtistId } = useGetArtistDetailsQuery(artistId);
  const { data: dataImageArtist } = useGetArtistQuery();
  const { data: dataArtistSongs } = useGetArtistSongsQuery(artistId);

  //UseState.
  const [dataTopArtist, setDataTopArtist] = useState<TTopArtist[] | null>([]);
  const pathname = usePathname();
  // Función para obtener una lista aleatoria de canciones
  const getRandomSongs = (
    dataImageArtist: TTopArtist[],
    count: number
  ): TTopArtist[] => {
    const shuffledData = [...dataImageArtist].sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, count);
  };

  //UseEffect
  useEffect(() => {
    if (dataImageArtist?.tracks?.data) {
      const randomSongs = getRandomSongs(dataImageArtist?.tracks?.data, 15);
      setDataTopArtist(randomSongs);
    }
  }, [dataImageArtist]);

  //Estilos
  const theme = useTheme();
  const styles = {
    containerTitle: {
      width: "95%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      marginTop: "1rem",
      marginRight: "1rem",
      marginBottom: "2.5rem",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        display: "block",
        textAlign: "center",
      },
    },
    containerGeneral: {
      marginLeft: "0",
      marginBottom: "6px",
      flex: "1",
      maxWidth: "100%",
      [theme.breakpoints.down("md")]: {
        // width: "150%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
      },
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
          <DetailsHeader artistId={artistId} dataArtistId={dataArtistId} />

          {/* Top artitas */}
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.75rem",
                  marginTop: "32px",
                }}
              >
                Top Artists
              </h2>
              <Link
                href="/General/ListenMusic/pages/TopArtists"
                style={{ textDecoration: "none" }}
              >
                <p
                  style={{
                    color: "#D1D5DB",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  See more
                </p>
              </Link>
            </div>
            {dataTopArtist ? (
              <Swiper
                slidesPerView="auto"
                spaceBetween={15}
                freeMode
                centeredSlides
                centeredSlidesBounds
                style={{ marginTop: "16px" }}
              >
                {dataTopArtist?.map((artist: TTopArtist, i: number) => (
                  <SwiperSlide
                    key={artist?.key}
                    style={{
                      width: "10%",
                      height: "auto",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "50%",
                      animation: "slideright 0.3s ease",
                      overflow: "hidden",
                    }}
                  >
                    <Tooltip title={artist?.artist?.name}>
                      <Link
                        href="/General/ListenMusic/pages/ArtistDetails/[artistId].js"
                        as={`/General/ListenMusic/pages/ArtistDetails/${artist?.artist?.id}`}
                      >
                        <img
                          src={artist?.album?.cover_big}
                          alt="Name"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        />
                      </Link>
                    </Tooltip>
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Box sx={styles.containerTitle}>
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "1.875rem",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Songs:
              </h2>
            </Box>
            <Box
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              {dataArtistSongs?.data ? (
                dataArtistSongs?.data
                  ?.slice(0, 50)
                  .map((song: TSonges, i: number) => (
                    <SongCard
                      key={song.key}
                      song={song}
                      i={i}
                      isPlaying={isPlaying}
                      activeSong={activeSong}
                      dataPlaylist={dataArtistSongs}
                    />
                  ))
              ) : (
                <CircularProgress
                  sx={{ width: "500px", height: "500px", color: "white" }}
                />
              )}
            </Box>
          </div>
        </div>

        {/* </Box> */}
        {/* </Box> */}
        {/* Reproductor */}

        <div>
          {activeSong?.title && (
            <div
              style={{
                position: "fixed",
                bottom: "0",
                left: "0",
                right: "0",
                display: "flex",
                background:
                  "linear-gradient(to bottom right, rgba(255,255,255,0.1), #2a2a80)",
                backdropFilter: "blur(8px)",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
                zIndex: "10",
              }}
            >
              <MusicPlayer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
