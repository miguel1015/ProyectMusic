import { useGetSongsBySearchQuery } from "@/redux/services/spotifyCore";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { SongCard } from "../../componentSongs/SongCard";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import SideBar from "../../SideBar/SideBar";
import MusicPlayer from "../../componentSongs/musicPlayer";
// import { SongCard } from "./SongCard";

const Search = () => {
  const router = useRouter();
  const { search } = router.query;
  const { activeSong, isPlaying } = useSelector((state: any) => state.player);

  const { data } = useGetSongsBySearchQuery(search);
  //   const songs = data?.data.map((song: any) => song.title);
  //   console.log("✅✅", search);

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
    ContSelect: {
      minWidth: "15%",
      [theme.breakpoints.down("md")]: {
        minHeigth: "40%",
        backgroundColor: "red",
      },
    },
    boxBox: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column-reverse",
      },
    },
  };

  return (
    <div>
      <Box sx={styles.boxBox}>
        <SideBar />
        <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "rgb(255 255 255)",
              marginTop: "16px",
              alignItems: "left",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontWeight: "700",
                fontSize: "30px",
                lineHeight: "36px",
                textAlign: "center",
              }}
            >
              Resultados de: <span style={{ fontWeight: "900" }}>{search}</span>
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "32px",
              }}
            >
              {data?.data?.map((song: any, i: number) => (
                <SongCard
                  key={song.key}
                  song={song}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  dataPlaylist={data}
                  i={i}
                />
              ))}
            </div>
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
      </Box>
    </div>
  );
};

export default Search;
