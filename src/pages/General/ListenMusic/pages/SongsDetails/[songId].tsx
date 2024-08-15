/* eslint-disable @next/next/no-img-element */
import SideBar from "../../SideBar/SideBar";
import { useGetSongDetailsQuery } from "@/redux/services/spotifyCore";
import { useRouter } from "next/router";
import DetailsHeader from "../../componentSongs/DetailsHeader";
import { Box, CircularProgress } from "@mui/material";
import RelatedSongs from "../../componentSongs/RelatedSongs";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "@/redux/playerSlice";
import { TSonges, TState } from "../../types";

export default function SongsDetails() {
  //Router
  const router = useRouter();
  const { songId } = router.query;

  //Dispatch
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector(
    (state: TState) => state.player
  );

  //Query
  const { data: songData } = useGetSongDetailsQuery({ songId });

  //Funcion para cambiar el icono.
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song: TSonges, i: number) => {
    dispatch(setActiveSong({ song, i }));
    dispatch(playPause(true));
  };

  //Estilos
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
      overflow: "hidden",
    },
    boxCard: {
      position: "relative",
      width: "100%",
      height: "14rem",
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <DetailsHeader songData={songData} />

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
                Song:
              </h2>
              {songData ? (
                <div style={{ marginTop: "20px", marginLeft: "1rem" }}>
                  {songData?.album?.preview === songData?.album?.preview ? (
                    <Box sx={{ ...styles.containerGeneral }}>
                      <Box sx={{ ...styles.boxCard }}>
                        <Box sx={{ ...styles.boxPlay }}>
                          <img
                            alt="song_img"
                            src={songData?.album?.cover_big}
                            style={{
                              borderRadius: "0.5rem",
                              width: "100%",
                              height: "100%",
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = "scale(1.1)";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          />
                        </Box>
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

            {/* Reproductor */}

            <RelatedSongs
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
