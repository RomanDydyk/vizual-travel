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
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderRadius: "12px",
          },
        },
      }}
    />
  );
};
