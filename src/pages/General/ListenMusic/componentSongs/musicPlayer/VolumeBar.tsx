import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import { TvolumeBar } from "./types";

const VolumeBar = ({ value, min, max, onChange, setVolume }: TvolumeBar) => (
  <div
    style={{
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {value <= 1 && value > 0.5 && (
      <VolumeUpIcon
        sx={{ fontSize: "25px", cursor: "pointer" }}
        onClick={() => setVolume(0)}
      />
    )}
    {value <= 0.5 && value > 0 && (
      <VolumeDownIcon
        sx={{ fontSize: "25px", cursor: "pointer" }}
        onClick={() => setVolume(0)}
      />
    )}
    {value === 0 && (
      <VolumeMuteIcon
        sx={{ fontSize: "25px", cursor: "pointer" }}
        onClick={() => setVolume(1)}
      />
    )}
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      style={{
        width: "10rem",
        height: "3px",
        marginLeft: "0.5rem",
        cursor: "pointer",
      }}
    />
  </div>
);

export default VolumeBar;
