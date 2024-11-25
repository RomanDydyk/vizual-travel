import React, { FC } from "react";
import { TextField } from "@mui/material";

interface InputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ value, onChange, label }) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      value={value}
      label={label || ""}
      onChange={onChange}
      sx={{
        boxShadow: "0px 1px 4px 0px #00000040",
        borderRadius: "12px",

        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderRadius: "12px",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          },
          "&:hover fieldset": {
            borderColor: "#00000070",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#00000040",
          },
          "& input": {
            fontSize: "24px",
            fontWeight: 600,
          },
        },
        "& .MuiInputLabel-root": {
          fontSize: "24px",
          fontWeight: 600,
        },
      }}
    />
  );
};
