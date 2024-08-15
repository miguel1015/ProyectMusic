/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useGetSongsRecommendedQuery } from "@/redux/services/spotifyCore";
import Link from "next/link";
import PlayAndPause from "./PlayAndPause";
import MusicPlayer from "./musicPlayer";
import { Box } from "@mui/material";
import { TRelatedSongs } from "./types";
import { TSonges } from "../types";

export default function RelatedSongs({
  activeSong,
  isPlaying,
  handlePauseClick,
  handlePlayClick,
}: TRelatedSongs) {
  //Querys.
  const { data: dataSongRecomended } = useGetSongsRecommendedQuery();

  //UseState.
  const [randomizedSongs, setRandomizedSongs] = useState<TSonges[]>([]);

  //Funcion para las canciones aleatorias.
  const getRandomSongs = (data: TSonges[], count: number): TSonges[] => {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, count);
  };

  //UseEfect.
  useEffect(() => {
    if (dataSongRecomended?.tracks?.data) {
      const randomSongs = getRandomSongs(dataSongRecomended?.tracks?.data, 25);
      setRandomizedSongs(randomSongs);
    }
  }, [dataSongRecomended]);

  //Estilos.
  const styles = {
    containerGeneral: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "#3f58c5",
      },
    },
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginLeft: "15px" }}
    >
      <h1
        style={{
          fontWeight: "700",
          fontSize: "1.875rem",
          lineHeight: "2.25rem",
          color: "white",
        }}
      >
        Canciones recomendadas:
      </h1>
      <div
        style={{
          marginTop: "24px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {randomizedSongs?.slice(0, 25).map((song: TSonges, i: number) => (
          <Box key={song.key} sx={styles.containerGeneral}>
            <h3
              style={{
                fontWeight: "700",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                color: "white",
              }}
            >
              {i + 1}
            </h3>
            <div
              style={{
                display: "flex",
                flex: "1 1 0%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  marginLeft: "15px",
                }}
                src={song?.album?.cover_big}
                alt={song?.title}
              ></img>
              <div
                style={{
                  display: "flex",
                  flex: "1 1 0%",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: "0.75rem",
                  marginRight: " 0.75rem",
                }}
              >
                <Link
                  href="/General/ListenMusic/pages/SongsDetails/[songId].js"
                  as={`/General/ListenMusic/pages/SongsDetails/${song?.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <p
                    style={{
                      fontSize: "1.25rem",
                      lineHeight: "1.75rem",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    {song?.title}
                  </p>
                </Link>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                  }}
                >
                  {song?.artist?.name}
                </p>
              </div>
            </div>
            <PlayAndPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={() => handlePlayClick(song, i)}
            />
          </Box>
        ))}
      </div>
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
  );
}
