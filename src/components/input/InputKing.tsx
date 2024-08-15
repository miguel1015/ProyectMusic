import React, { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TInputKing } from "./types";
import { Span } from "./styled";

export const InputKing: FC<TInputKing> = ({
  disabled,
  type,
  placeholder,
  error,
  label,
  labelColor,
  id,
  schema,
}) => {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    >
      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "white",
            borderRadius: "4px",
            fontFamily: "Rubik, sans-serif",
            outline: "0",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
        }}
        type={type}
        // error={!!error}
        id={id}
        label={label}
        helperText={disabled ? "" : error?.message || ""}
      />
    </Box>
  );
};
