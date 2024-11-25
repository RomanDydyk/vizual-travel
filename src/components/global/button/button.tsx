import React from "react";
import { Button as MuiButton, Typography, Stack, SxProps } from "@mui/material";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant: ButtonVariant;
  onClick?: () => void;
  text: string;
  sx?: SxProps;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  text,
  sx,
}) => {
  return (
    <Stack spacing={2} alignItems="center">
      {variant === "primary" ? (
        <MuiButton
          onClick={onClick}
          variant="contained"
          sx={{
            background:
              "radial-gradient(100% 100% at 0% 0%, #FF9345 0.01%, #FE7138 50%, #F25D21 100%)",
            width: "100%",
            borderRadius: "18px",
            color: "#FFFFFF",
            padding: "12px 32px",
            fontWeight: "700",
            fontSize: "21px",
            lineHeight: "31.5px",
            textTransform: "none",
            transition: "all 1s ease-in-out",
            boxShadow: "none",
            ":hover": {
              backgroundColor: "#FFFFFF",
            },
            ...sx,
          }}
        >
          {text}
        </MuiButton>
      ) : (
        <Typography
          onClick={onClick}
          sx={{
            color: "#FF8447",
            width: "100%",
            cursor: "pointer",
            textTransform: "none",
            padding: "12px 32px",
            fontWeight: "700",
            fontSize: "21px",
            lineHeight: "31.5px",
            borderRadius: "18px",
            textAlign: "center",
            boxShadow: "none",
            transition: "all 1s ease-in-out",
            ":hover": {
              background:
                "radial-gradient(100% 100% at 0% 0%, #FF9345 0.01%, #FE7138 50%, #F25D21 100%)",
              color: "#FFFFFF",
            },
            ...sx,
          }}
        >
          {text}
        </Typography>
      )}
    </Stack>
  );
};

export default Button;
