import { Box, SxProps } from "@mui/material";
import React, { FC, ReactNode } from "react";
import CustomTypography from "../global/typography/typography";

export const DropDownItem: FC<{
  item: { icon: ReactNode; label: string };
  sx?: SxProps;
}> = ({ item, sx }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {item.icon}
      <CustomTypography sx={{ marginLeft: 1, ...sx }}>
        {item.label}
      </CustomTypography>
    </Box>
  );
};

export default DropDownItem;
