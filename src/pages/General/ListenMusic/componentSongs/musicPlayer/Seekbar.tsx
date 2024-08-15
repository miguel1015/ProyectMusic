import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { TSeekbar } from "./types";

const Seekbar = ({
  value,
  min,
  max,
  onInput,
  setSeekTime,
  appTime,
}: TSeekbar) => {
  //Función.
  const getTime = (time: number) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <MinimizeIcon
        onClick={() => setSeekTime(appTime - 5)}
        style={{
          marginRight: "1rem",
          display: "flex",
          cursor: "pointer",
        }}
      />
      <p
        style={{
          color: "white",
        }}
      >
        {value === 0 ? "0:00" : getTime(value)}
      </p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        style={{
          width: "6rem",
          height: "3px",
          margin: "0.25rem",
          borderRadius: "0.25rem",
          display: "block",
          cursor: "pointer",
        }}
      />
      <p
        style={{
          color: "white",
        }}
      >
        {max === 0 ? "0:00" : getTime(max)}
      </p>
      <AddIcon
        style={{
          marginLeft: "1rem",
          display: "block",
          cursor: "pointer",
        }}
        onClick={() => setSeekTime(appTime + 5)}
      />
    </div>
  );
};

export default Seekbar;
