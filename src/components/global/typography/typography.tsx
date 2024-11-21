import { Typography, SxProps } from "@mui/material";
import React, { FC } from "react";

interface CustomTypographyProps {
  children: React.ReactNode;
  sx?: SxProps;
}

export const CustomTypography: FC<CustomTypographyProps> = ({
  children,
  sx,
}) => {
  return (
    <Typography
      sx={{
        color: "#0E2132",
        fontSize: "24px",
        lineHeight: "36px",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
