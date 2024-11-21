import React from "react";
import { Button as MuiButton, Typography, Stack } from "@mui/material";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant: ButtonVariant;
  onClick?: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ variant, onClick, text }) => {
  return (
    <Stack spacing={2} alignItems="center">
      {variant === "primary" ? (
        <MuiButton
          onClick={onClick}
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #FF6A00, #FF8C00)",
            borderRadius: "24px",
            color: "#FFFFFF",
            padding: "12px 32px",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "none",
            transition: "all 0.5s ease-in-out",
            boxShadow: "0px 8px 16px rgba(255, 136, 0, 0.4)",
            ":hover": {
              backgroundColor: "#FFFFFF",
              color: "#FF8C00",
            },
          }}
        >
          {text}
        </MuiButton>
      ) : (
        <Typography
          onClick={onClick}
          sx={{
            color: "#FF8C00",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            textTransform: "none",
            padding: "12px 32px",
            borderRadius: "24px",
            transition: "all 0.5s ease-in-out",
            ":hover": {
              background: "linear-gradient(90deg, #FF6A00, #FF8C00)",
              color: "#FFFFFF",
              boxShadow: "0px 8px 16px rgba(255, 136, 0, 0.4)",
            },
          }}
        >
          {text}
        </Typography>
      )}
    </Stack>
  );
};

export default Button;
