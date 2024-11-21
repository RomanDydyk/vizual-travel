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
      header={
        <CustomTypography>{tripTitle || "Trip Planning"}</CustomTypography>
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
          }}
        >
          Nov 10 - Nov 10, 2024
        </CustomTypography>
        <Box display="flex" alignItems="center" mt={1} gap={1}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundColor: "#FE7138",
              borderRadius: "8px",
              width: "60px",
              height: "60px",
              padding: "13px 8px",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Day 1
          </Box>
          <MuiButton
            onClick={() => {}}
            variant="contained"
            sx={{
              backgroundColor: "#FF91471A",
              borderRadius: "8px",
              width: "60px",
              height: "60px",
              color: "#FE7138",
              fontSize: "24px",
              boxShadow: "none",
            }}
          >
            +
          </MuiButton>
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
              background: "#FFF",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "12px",
              padding: "12px 16px",
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
        justifyContent="center"
        alignItems="center"
        mt={2}
        style={{ cursor: "pointer" }}
      >
        <AddIcon style={{ color: "#FF6F61" }} />
        <Typography
          variant="body1"
          fontWeight="bold"
          ml={1}
          color="black"
          onClick={handleAddPoint}
        >
          Add Point
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", left: 10, bottom: 10 }}>
        <Button variant={"primary"} text={"Save"} />
      </Box>
    </HomeLayout>
  );
};
