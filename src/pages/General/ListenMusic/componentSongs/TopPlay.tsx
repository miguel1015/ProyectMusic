/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { playPause, setActiveSong } from "@/redux/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetArtistQuery } from "@/redux/services/spotifyCore";
import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";
import PlayAndPause from "./PlayAndPause";
import { CircularProgress, Tooltip } from "@mui/material";
import { useGetTopChartsQuery } from "@/redux/services/spotifyCore";
import { TSong, TSonges, TState, TTopArtist } from "../types";
import {
  CardsTopCharts,
  ContainerGeneralTopChart,
  DivDataPlays,
  DivDetailTopSongs,
  DivParagraphTopPlay,
  DivTopSongs,
  H2DivTopPlay,
  H3DivTopPlays,
  ParagraphSeeMore,
  ParagraphSongArtistName,
  ParagraphSongMore,
} from "./styled";

export default function TopPlay() {
  //Redux.
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector(
    (state: TState) => state.player
  );

  //Query.
  const { data: dataTopChart } = useGetTopChartsQuery();
  const { data: dataImageArtist } = useGetArtistQuery();

  //UseState
  const [dataTopPlays, setDataTopPlays] = useState<TSonges[] | null>([]);
  const [dataTopArtist, setDataTopArtist] = useState<TTopArtist[] | null>([]);

  // Función para obtener una lista aleatoria de canciones
  const getRandomSongs = (data: TSonges[], count: number): TSonges[] => {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, count);
  };

  // Función para obtener una lista aleatoria de Artistas
  const getRandomArtist = (data: TTopArtist[], count: number): TTopArtist[] => {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, count);
  };

  //UseEffects
  useEffect(() => {
    if (dataTopChart?.tracks?.data) {
      const randomSongs = getRandomSongs(dataTopChart?.tracks?.data, 4);
      setDataTopPlays(randomSongs);
    }
  }, [dataTopChart]);
  useEffect(() => {
    if (dataImageArtist?.tracks?.data) {
      const randomArtists = getRandomArtist(dataImageArtist?.tracks?.data, 7);
      setDataTopArtist(randomArtists);
    }
  }, [dataImageArtist]);


  //Funciones para cambiar el icono.
  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = (song: TSong, i: number) => {
    dispatch(setActiveSong({ song, dataTopChart, i }));
    dispatch(playPause(false));
  };

  const style = {
    CircularStyles: {
      color: "white",
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
    },
    SwiperStyles: {
      width: "25%",
      height: "auto",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "50%",
      animation: "slideright 0.3s ease",
      overflow: "hidden",
    },
    ImgScales: {
      width: "80px",
      height: "80px",
      borderRadius: "15px",
      overflow: "hidden",
    },
  };

  return (
    <ContainerGeneralTopChart>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <DivParagraphTopPlay>
          <H2DivTopPlay>Top Songs</H2DivTopPlay>
          <Link
            href="/General/ListenMusic/pages/TopCharts"
            style={{ textDecoration: "none" }}
          >
            <ParagraphSeeMore>See more</ParagraphSeeMore>
          </Link>
        </DivParagraphTopPlay>
        {dataTopPlays ? (
          <DivDataPlays>
            {dataTopPlays?.map((song, i) => (
              <CardsTopCharts key={song?.id}>
                <H3DivTopPlays>{i + 1}</H3DivTopPlays>
                <DivTopSongs>
                  <img
                    style={style.ImgScales}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    src={song?.album?.cover_big}
                    alt={song?.title}
                  />
                  <DivDetailTopSongs>
                    <Tooltip title="Ver detalles de la canción">
                      <Link
                        href="/General/ListenMusic/pages/SongsDetails/[songId].js"
                        as={`/General/ListenMusic/pages/SongsDetails/${song?.id}`}
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <ParagraphSongMore>{song?.title}</ParagraphSongMore>
                      </Link>
                    </Tooltip>
                    <Link
                      href="/General/ListenMusic/pages/SongsDetails/[songId].js"
                      as={`/General/ListenMusic/pages/SongsDetails/${song?.id}`}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <ParagraphSongArtistName>
                        {song?.artist?.name}
                      </ParagraphSongArtistName>
                    </Link>
                  </DivDetailTopSongs>
                </DivTopSongs>
                <PlayAndPause
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  song={song}
                  handlePause={handlePause}
                  handlePlay={() => handlePlay(song, i)}
                />
              </CardsTopCharts>
            ))}
          </DivDataPlays>
        ) : (
          <CircularProgress sx={style.CircularStyles} />
        )}
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <DivParagraphTopPlay>
          <H2DivTopPlay>Top Artists</H2DivTopPlay>
          <Link
            href="/General/ListenMusic/pages/TopArtists"
            style={{ textDecoration: "none" }}
          >
            <ParagraphSeeMore>See more</ParagraphSeeMore>
          </Link>
        </DivParagraphTopPlay>
        {dataTopArtist ? (
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode
            centeredSlides
            centeredSlidesBounds
            style={{ marginTop: "16px" }}
          >
            {dataTopArtist?.map((artist) => (
              <SwiperSlide key={artist?.id} style={style.SwiperStyles}>
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
          <CircularProgress sx={style.CircularStyles} />
        )}
      </div>
    </ContainerGeneralTopChart>
  );
}
