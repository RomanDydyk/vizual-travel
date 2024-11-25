import React from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  Button as MuiButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeLayout from "../../layouts/homeLayout/homeLayout";
import { Point, useTripStore } from "../../store/tripStore";
import CustomTypography from "../../components/global/typography/typography";
import Button from "../../components/global/button/button";
import { useNavigate } from "react-router-dom";
import MapButton from "../../components/mapButton/mapButton";

export const TripOverview = () => {
  const navigate = useNavigate();
  const { points, tripTitle } = useTripStore();
  const handleAddPoint = () => {
    navigate(`/trip?title=${encodeURIComponent(tripTitle)}`);
  };
  const edit = (item: Point) => {
    localStorage.setItem("editPoint", JSON.stringify(item));
    navigate(`/trip?title=${encodeURIComponent(tripTitle)}`);
  };
  return (
    <HomeLayout
      burgerBorder={false}
      header={
        <CustomTypography
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "30px",
            maxWidth: "40%",
            margin: "0 auto",
            whiteSpace: "normal",
            wordWrap: "break-word",
            textAlign: "center",
          }}
        >
          {tripTitle || "Trip Planning"}
        </CustomTypography>
      }
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={2}
        mb={4}
      >
        <CustomTypography
          sx={{
            color: "black",
            fontWeight: 700,
            boxShadow: "0px 2px 3px 0px #00000040",
            padding: "2px 10px",
            borderRadius: "26px",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Nov 10 - Nov 10, 2024
        </CustomTypography>
        <Box display="flex" alignItems="center" mt={3} gap={1}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection={"column"}
            sx={{
              backgroundColor: "#FE7138",
              borderRadius: "8px",
              height: "60px",
              padding: "13px 8px",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              width: "51px",
            }}
          >
            Day
            <CustomTypography
              sx={{
                color: "white",
                fontWeight: "700",
                fontSize: "26px",
                lineHeight: "29px",
              }}
            >
              1
            </CustomTypography>
          </Box>
          <Box
            sx={{
              width: "51px",
              height: "60px",
            }}
          >
            <MuiButton
              onClick={() => {}}
              variant="contained"
              sx={{
                backgroundColor: "#FF91471A",
                borderRadius: "8px",
                width: "100%",
                height: "100%",
                padding: 0,
                minWidth: 0,
                color: "#FE7138",
                fontSize: "24px",
                boxShadow: "none",
              }}
            >
              +
            </MuiButton>
          </Box>
        </Box>
      </Box>

      <List>
        {points.map((point, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "12px",
              marginBottom: "12px",
              padding: "12px 16px",
              background: "linear-gradient(180deg, #EEF3F7 0%, #FFFFFF 100%)",
              boxShadow:
                "0px 1.5px 1.5px 0px #FFFFFF66 inset, 0px -4px 15px 0px #FFFFFF40 inset, 0px 2.77px 1.96px 0px #ADBFD204, 0px 6.65px 4.72px 0px #ADBFD205, 0px 12.52px 8.89px 0px #ADBFD206, 0px 2.34px 2.86px 0px #37587A08, 0px 41.78px 29.66px 0px #ADBFD209, 0px 10px 20px 0px #3E638A0D",
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              {point.type.icon}
              <Box>
                <Typography variant="body1" fontWeight="bold" color="black">
                  {point.point}
                </Typography>
                <Box sx={{ display: "flex", gap: "8px" }}>
                  <Typography variant="body2" fontWeight={700} color="#FE7138">
                    10:00 AM
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {index === 0 ? "Start Point" : "Next Point"}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Button
              sx={{ padding: "4px 6px " }}
              variant="primary"
              onClick={() => {
                edit(point);
              }}
              text="Edit"
            />
          </ListItem>
        ))}
      </List>

      <Box
        display="flex"
        alignItems="center"
        mt={1}
        style={{ cursor: "pointer" }}
      >
        <AddIcon
          sx={{
            color: "#FE7138",
            fontSize: "28px",
            stroke: "#FE7138",
            strokeWidth: "4px",
          }}
        />
        <Typography
          variant="body1"
          fontWeight="bold"
          ml={3}
          color="black"
          onClick={handleAddPoint}
        >
          Add Point
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", left: 10, bottom: 10 }}>
        <Button variant={"primary"} text={"Save"} />
      </Box>
      <Box sx={{ position: "absolute", right: "16px", top: "29px" }}>
        <MapButton />
      </Box>
    </HomeLayout>
  );
};
