import { useGetSongsBySearchQuery } from "@/redux/services/spotifyCore";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { SongCard } from "./SongCard";

const Search = () => {
  const router = useRouter();
  const { search } = router.query;
  const { activeSong, isPlaying } = useSelector((state: any) => state.player);

  const { data } = useGetSongsBySearchQuery(search);
  const songs = data?.data.map((song: any) => song.title);
  console.log("✅✅", search);

  return (
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
      <h2 style={{ fontWeight: "700", fontSize: "30px", lineHeight: "36px" }}>
        Showing results for <span className="font-black">{search}</span>
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
  );
};

export default Search;
