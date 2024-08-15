/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, CircularProgress, Tooltip } from "@mui/material";
import Link from "next/link";
import { TDetailHeader } from "../types";

export default function DetailsHeader({
  artistId,
  songData,
  dataArtistId,
  dataAlbum,
}: TDetailHeader) {
  //Estilos
  const theme = useTheme();
  const genreTitle = "rock";
  const styles = {
    containerGeneral: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        display: "block",
        textAlign: "center",
      },
    },
    secondContainer: {
      width: "100%",
      background: "linear-gradient(to bottom, transparent, black)",
      height: "100px",
      [theme.breakpoints.down("md")]: {
        height: "200px",
      },
    },
    imgCard: {
      minWidth: "15%",
      [theme.breakpoints.down("md")]: {
        minHeigth: "40%",
        backgroundColor: "red",
      },
    },
  };

  const stylesh2 = {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "1.75rem",
    color: "white",
  };
  const textTitle = {
    marginLeft: "1.25rem",
  };

  return (
    <Box sx={styles.containerGeneral}>
      <Box sx={styles.secondContainer} />
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          marginBottom: "1.7rem",
          marginLeft: "1rem",
          // overflow: "hidden",
        }}
      >
        {songData?.album?.cover_big ||
        dataArtistId?.picture_big ||
        dataAlbum?.artist?.picture_big ? (
          <img
            alt="profile"
            src={
              songData?.album?.cover_big
                ? songData?.album?.cover_big
                : dataArtistId?.picture_big || dataAlbum?.artist?.picture_big
            }
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            style={{
              marginRight: "1rem",
              width: "7rem",
              height: "7rem",
              border: "2px solid",
              borderColor: "#000",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0px 0px 20px rgba(236, 234, 234, 0.5)",
            }}
          />
        ) : (
          <CircularProgress />
        )}

        <div style={textTitle}>
          <h2 style={stylesh2}>
            {songData?.title ? songData?.title : dataArtistId?.name}
          </h2>
          {!artistId && (
            <Tooltip title="Ir al artista">
              <Link
                style={{ textDecoration: "none" }}
                href="/General/ListenMusic/pages/ArtistDetails/[artistId].js"
                as={`/General/ListenMusic/pages/ArtistDetails/${songData?.artist?.id}`}
              >
                <p
                  style={{
                    color: "rgb(156 163 175)",
                    fontSize: "20px",
                    lineHeight: "24px",
                  }}
                >
                  {songData?.artist?.name}
                </p>
              </Link>
            </Tooltip>
          )}

          {!dataArtistId?.name ? (
            <Link
              href="/General/ListenMusic/pages/AlbumDetails/[albumId].tsx"
              as={`/General/ListenMusic/pages/AlbumDetails/${songData?.album?.id}`}
              style={{
                color: "rgb(156 163 175)",
                fontSize: "15px",
                lineHeight: "24px",
                textDecoration: "none",
              }}
            >
              Album
              {" :"} {songData?.album?.title}
              {" - "}
              {songData?.release_date
                ? songData?.release_date
                : songData?.genres?.primary}
            </Link>
          ) : null}
        </div>
      </Box>
    </Box>
  );
}
