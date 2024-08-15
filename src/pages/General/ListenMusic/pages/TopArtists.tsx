/* eslint-disable @next/next/no-img-element */
import React from "react";
import SideBar from "../SideBar/SideBar";
import { useTheme } from "@mui/material/styles";
import {
  useGetTopArtistRocketQuery,
  useGetTopArtistsFemaleQuery,
} from "@/redux/services/spotifyCore";
import { Box } from "@mui/material";
import Link from "next/link";

export default function TopArtists() {
  const { data: dataSongsFemale } = useGetTopArtistsFemaleQuery();
  const { data: dataSongsArtRock } = useGetTopArtistRocketQuery();

  const theme = useTheme();
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
      // "&:hover": {
      //   ...(song?.title === song?.title
      //     ? { display: "flex", backgroundColor: "black", opacity: 0.7 }
      //     : { display: "none" }),
      // },
    },
  };
  const boxImage = {
    width: "100%",
    height: "14rem",
    borderRadius: "50%",
    "&:hover": {
      display: "flex",
      backgroundColor: "black",
      opacity: "0.7",
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
            <h1>Top Artists</h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                position: "relative",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {dataSongsFemale?.tracks?.data.map((artisTop: any, i: number) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "250px",
                    padding: "4px",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "14rem",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <Link
                      href="/General/ListenMusic/pages/ArtistDetails/[artistId].tsx"
                      as={`/General/ListenMusic/pages/ArtistDetails/${artisTop?.artist?.id}`}
                    >
                      <img
                        alt="artist_img"
                        src={artisTop?.album?.cover_big}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                          transition: "transform 0.2s ease",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <Link
                      href="/General/ListenMusic/pages/ArtistDetails/[artistId].tsx"
                      as={`/General/ListenMusic/pages/ArtistDetails/${artisTop?.artist?.id}`}
                      style={{
                        fontSize: "1rem",
                        textDecoration: "none",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        color: "#d2d6dc",
                        marginTop: "0.25rem",
                      }}
                    >
                      <h2>{artisTop.artist.name}</h2>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
