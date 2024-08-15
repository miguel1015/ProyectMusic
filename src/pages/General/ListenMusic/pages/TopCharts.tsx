import React from "react";
import SideBar from "../SideBar/SideBar";
import { TState } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { useGetSongsByGenreQuery } from "@/redux/services/spotifyCore";
import { genres } from "../componentSongs/genres";
import { selectGenreListId } from "@/redux/playerSlice";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function TopCharts() {
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state: TState) => state.player
  );
  const { data: dataGetSongGenre } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  const dispatch = useDispatch();

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
            <h1>Top Charts</h1>
            <Box sx={styles.ContSelect}>
              <FormControl fullWidth sx={{ backgroundColor: "white" }}>
                <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dataGetSongGenre}
                  label="Age"
                  onChange={(e) => dispatch(selectGenreListId(e.target.value))}
                >
                  {genres.map((genre) => (
                    <MenuItem key={genre.value} value={genre.value}>
                      {genre.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
