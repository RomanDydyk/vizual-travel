import { Box } from "@mui/material";
import React, { FC, ReactNode } from "react";
import CustomTypography from "../global/typography/typography";

export const DropDownItem: FC<{ item: { icon: ReactNode; label: string } }> = ({
  item,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {item.icon}
      <CustomTypography sx={{ marginLeft: 1 }}>{item.label}</CustomTypography>
    </Box>
  );
};

export default DropDownItem;
