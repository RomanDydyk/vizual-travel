import { MapIcon } from "../../assets/map";
import CustomTypography from "../global/typography/typography";
import { Box } from "@mui/material";

export const MapButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "6px",
        padding: "9.5px 15px",
        maxWidth: "100px",
        borderRadius: "18px",
        boxShadow:
          "0px 2px 6px 0px #B8C5D033, 0px 6px 22px 0px #B8C5D04D, 0px 9px 30px 0px #C6D8E933, 0px 1.5px 1.5px 0px #FFFFFF40 inset",
      }}
    >
      <MapIcon />
      <CustomTypography
        sx={{
          color: "#FE7138",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "27px",
        }}
      >
        Map
      </CustomTypography>
    </Box>
  );
};

export default MapButton;
