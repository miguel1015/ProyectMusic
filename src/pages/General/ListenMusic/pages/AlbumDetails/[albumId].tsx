/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTheme } from "@mui/material/styles";
import SideBar from "../../SideBar/SideBar";
import { useGetAlbumDetailsQuery } from "@/redux/services/spotifyCore";
import { useRouter } from "next/router";
import DetailsHeader from "../../componentSongs/DetailsHeader";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Albums from "../../componentSongs/Albums";
import { TSonges, TState } from "../../types";
import { playPause, setActiveSong } from "@/redux/playerSlice";

export default function AlbumId() {
  //Router
  const router = useRouter();
  const { albumId } = router.query;

  //Querys.
  const { data: dataAlbum } = useGetAlbumDetailsQuery({ albumId });

  //Dispatch
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector(
    (state: TState) => state.player
  );

  console.log("⭐⭐", dataAlbum);

  //Funcion para cambiar el icono.
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song: TSonges, i: number) => {
    dispatch(setActiveSong({ song, i }));
    dispatch(playPause(true));
  };

  //Estilos
  const theme = useTheme();
  const styles = {
    containerGeneral: {
      display: "flex",
      flexDirection: "column",
      width: "250px",
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
        ...(dataAlbum?.title === dataAlbum?.title
          ? { display: "flex", backgroundColor: "black", opacity: 0.7 }
          : { display: "none" }),
      },
    },
    boxCard: {
      position: "relative",
      width: "100%",
      height: "14rem",
    },
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SideBar />
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <DetailsHeader songData={dataAlbum} dataAlbum={dataAlbum} />

            <div style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "1.875rem",
                  lineHeight: "2.25rem",
                  marginLeft: "1rem",
                }}
              >
                Album: {dataAlbum?.title}
              </h2>
              {dataAlbum ? (
                <div style={{ marginTop: "20px", marginLeft: "1rem" }}>
                  {dataAlbum ? (
                    <Box sx={{ ...styles.containerGeneral }}>
                      <Box sx={{ ...styles.boxCard }}>
                        <Box sx={{ ...styles.boxPlay }}></Box>
                        <img
                          alt="song_img"
                          src={dataAlbum?.cover_big}
                          style={{
                            borderRadius: "0.5rem",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                    </Box>
                  ) : (
                    <p
                      style={{
                        color: "#ffffff",
                        fontSize: "16px",
                        marginTop: "1rem",
                      }}
                    >
                      Sorry, Not found!
                    </p>
                  )}
                </div>
              ) : (
                <CircularProgress />
              )}
            </div>

            <Albums
              dataAlbum={dataAlbum}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
