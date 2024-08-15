/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TTracks } from "./types";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import { SpinningImage } from "./styled";

const Track = ({ isPlaying, activeSong }: TTracks) => (
  <div
    style={{
      flex: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <SpinningImage isPlaying={!!isPlaying}>
      <img
        src={activeSong?.album?.cover_big}
        alt="cover art"
        style={{
          borderRadius: "50%",
          height: "100px",
        }}
      />
    </SpinningImage>
    <div style={{ width: "auto" }}>
      <Link
        href="/General/ListenMusic/pages/SongsDetails/[songId].js"
        as={`/General/ListenMusic/pages/SongsDetails/${activeSong?.id}`}
        style={{ textDecoration: "none" }}
      >
        <Tooltip title="Ver detalles de la canción" placement="top">
          <p
            style={{
              textAlign: "center",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.125rem",
            }}
          >
            {activeSong?.title ? activeSong?.title : "No active Song"}
          </p>
        </Tooltip>
      </Link>
      <Link
        href="/General/ListenMusic/pages/ArtistDetails/[artistId].tsx"
        as={`/General/ListenMusic/pages/ArtistDetails/${activeSong?.artist?.id}`}
        style={{ textDecoration: "none" }}
      >
        <Tooltip title="Ver detalles del artista">
          <p
            style={{
              textAlign: "center",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              color: "#ccc",
            }}
          >
            {activeSong?.artist?.name
              ? activeSong?.artist?.name
              : "No active Song"}
          </p>
        </Tooltip>
      </Link>
    </div>
  </div>
);

export default Track;
