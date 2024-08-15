/* eslint-disable @next/next/no-img-element */
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "@/redux/playerSlice";
import { Box, Tooltip, Typography } from "@mui/material";
import PlayAndPause from "./PlayAndPause";
import Link from "next/link";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { toast } from "react-toastify";
import { BoxCard, BoxPlay } from "./styled";
import { TSongCard } from "./types";

export const SongCard: FC<TSongCard> = ({
  song,
  i,
  isPlaying,
  activeSong,
  dataPlaylist,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  //Redux.
  const dispatch = useDispatch();

  //Función para cambiar el icono.
  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(setActiveSong({ song, dataPlaylist, i }));
    dispatch(playPause(true));
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }

    if (!isFavorite) {
      toast.success("¡Canción agregada a favoritos exitosamente!");
    } else {
      toast.error("¡Eliminada de favoritos!");
    }
  };

  return (
    <Box sx={{ minHeight: 350 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: 320,
          gridColumn: "span 2",
          flexDirection: "row",
          flexWrap: "wrap",
          resize: "horizontal",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: "translateY(-10px)",
          },
          "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
        })}
      >
        <AspectRatio
          variant="soft"
          sx={{
            flexGrow: 1,
            display: "contents",
            "--AspectRatio-paddingBottom":
              "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
          }}
        >
          <img src={song?.album?.cover_big} loading="lazy" alt="" />
        </AspectRatio>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <div>
              <Typography>
                <Tooltip title="Ver detalles de la canción">
                  <Link
                    href="/General/ListenMusic/pages/SongsDetails/[songId].js"
                    as={`/General/ListenMusic/pages/SongsDetails/${song?.id}`}
                    style={{
                      fontSize: "1rem",
                      textDecoration: "none",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      color: "#588ad4",
                      marginTop: "0.25rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {song?.title}
                  </Link>
                </Tooltip>
              </Typography>
            </div>
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              sx={{ ml: "auto", alignSelf: "flex-start" }}
              onClick={handleFavoriteClick}
            >
              {isFavorite ? (
                <Tooltip title="Eliminar de favoritos" placement="top">
                  <FavoriteRoundedIcon sx={{ color: "red" }} />
                </Tooltip>
              ) : (
                <Tooltip title="Añadir a favoritos" placement="top">
                  <FavoriteBorderRoundedIcon />
                </Tooltip>
              )}
            </IconButton>
          </Box>
          <AspectRatio
            sx={{
              "--AspectRatio-paddingBottom":
                "clamp(0px, (100% - 200px) * 999, 350px)",
              borderRadius: "1rem",
            }}
          >
            <BoxCard>
              <BoxPlay>
                <PlayAndPause
                  song={song}
                  handlePause={handlePause}
                  handlePlay={handlePlay}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                />
              </BoxPlay>
              <img
                alt=""
                src={song?.album?.cover_big}
                style={{ transition: "transform 0.2s ease" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </BoxCard>
          </AspectRatio>
          <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
            <Avatar variant="soft" color="neutral">
              {song?.artist?.name?.charAt(0)}
            </Avatar>
            <div>
              <Typography>
                <Tooltip title="Ver detalles del artista">
                  <Link
                    href="/General/ListenMusic/pages/ArtistDetails/[artistId].tsx"
                    as={`/General/ListenMusic/pages/ArtistDetails/${song?.artist?.id}`}
                    style={{
                      textDecoration: "none",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      color: "#000000",
                      marginTop: "0.25rem",
                      fontFamily: "sans-serif",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {song?.artist?.name}
                  </Link>
                </Tooltip>
              </Typography>
              <Typography sx={{ fontFamily: "sans-serif" }}>
                <Tooltip title="Ver album">
                  <Link
                    href="/General/ListenMusic/pages/AlbumDetails/[AlbumId].tsx"
                    as={`/General/ListenMusic/pages/AlbumDetails/${song?.album?.id}`}
                    style={{
                      textDecoration: "none",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      color: "#000000",
                      marginTop: "0.25rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {song?.album?.title}
                  </Link>
                </Tooltip>
              </Typography>
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
