import SearchIcon from "@mui/icons-material/Search";
import { CircularProgress, Grid } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetTopPlaylistQuery } from "../../../redux/services/spotifyCore";
import SideBar from "./SideBar/SideBar";
import { SongCard } from "./componentSongs/SongCard";
import TopPlay from "./componentSongs/TopPlay";
import MusicPlayer from "./componentSongs/musicPlayer";
import {
  BoxReproductor,
  ContainerComponent,
  ContainerTitle,
  DivCards,
  DivIcon,
  H1,
  SearchInput,
} from "./styled";
import { TSonges, TState } from "./types";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function Index() {
  //Uso del redux.
  const { activeSong, isPlaying } = useSelector(
    (state: TState) => state.player
  );

  //Query.
  const { data, isLoading } = useGetTopPlaylistQuery();

  //Router.
  const Router = useRouter();

  //UseState.
  const [dataPlayList, setDataPlayList] = useState<TSonges[] | undefined>();
  const [searchTeam, setSearchTeam] = useState("");
  const [seeReproductor, setSeeReproductor] = useState(false);

  //Función para buscar.
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    Router.push(`/General/ListenMusic/pages/Search/${searchTeam}`);
  };

  // Función para obtener una lista aleatoria de canciones
  const getRandomSongs = (data: TSonges[], count: number): TSonges[] => {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, count);
  };

  //UseEffect
  useEffect(() => {
    if (data?.tracks?.data) {
      const randomSongs = getRandomSongs(data.tracks.data, 50);
      setDataPlayList(randomSongs);
    }
  }, [data]);

  useEffect(() => {
    if (!!activeSong?.title) {
      setSeeReproductor(true);
    }
  }, [activeSong?.title]);

  return (
    <div>
      <Head>
        <title>Listen music</title>
      </Head>
      <Grid
        container
        flexDirection={{
          xs: "column-reverse",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <Grid item xs={12} sm={7.5} md={3} lg={2} xl={1.7}>
          <SideBar />
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={7}>
          <ContainerComponent>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ContainerTitle>
                <H1>semi-diminished music</H1>
              </ContainerTitle>
            </Grid>
            <Grid>
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: "8px",
                  color: "white",
                }}
              >
                <DivIcon>
                  <SearchIcon
                    sx={{ width: "20px", height: "20px", marginLeft: "20px" }}
                  />
                  <SearchInput
                    name="search-field"
                    autoComplete="off"
                    id="search-field"
                    placeholder="Buscar..."
                    type="search"
                    value={searchTeam}
                    onChange={(e) => setSearchTeam(e.target.value)}
                  />
                </DivIcon>
              </form>
            </Grid>

            <DivCards>
              {!isLoading ? (
                dataPlayList?.map((song: TSonges, i: number) => (
                  <SongCard
                    key={i}
                    song={song}
                    i={i}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    dataPlaylist={dataPlayList}
                  />
                ))
              ) : (
                <Box
                  sx={{
                    pt: 0.5,
                    width: "95%",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      variant="rounded"
                      width={350}
                      height={490}
                      sx={{ background: "#2f3957" }}
                    />
                  ))}
                </Box>
              )}
            </DivCards>
          </ContainerComponent>
        </Grid>

        {!isLoading ? (
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <TopPlay />
          </Grid>
        ) : (
          <Box>
            <Skeleton
              variant="rounded"
              width={350}
              height={900}
              sx={{ background: "#2f3957" }}
            />
          </Box>
        )}

        <Grid item xs={12} sm={12} md={4} lg={12}>
          {seeReproductor && (
            <BoxReproductor>
              <MusicPlayer
                dataPlayList={dataPlayList}
                setSeeReproductor={setSeeReproductor}
              />
            </BoxReproductor>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
