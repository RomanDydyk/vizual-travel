import React from "react";
import Button from "../../components/global/button/button";
import { Box } from "@mui/material";
import { CustomModal } from "../../components/global/modal/modal";
import { Input } from "../../components/global/input/input";
import CustomTypography from "../../components/global/typography/typography";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [showCreateTipModal, setShowCreateTripModal] = React.useState(false);
  const [tripTitle, setTripTitle] = React.useState("");
  const navigate = useNavigate();
  const toggleModal = () => {
    setShowCreateTripModal((prev) => !prev);
  };

  const handleTripTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripTitle(e.target.value);
  };

  const handleStartPlanning = () => {
    if (tripTitle.trim()) {
      navigate(`/trip?title=${encodeURIComponent(tripTitle)}`);
      toggleModal();
    }
  };

  return (
    <Box>
      <CustomModal open={showCreateTipModal} onClose={toggleModal}>
        <CustomTypography
          sx={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          Title your Trip
        </CustomTypography>
        <Input value={tripTitle} onChange={handleTripTitleChange} />
        <Box
          sx={{
            paddingTop: "10px",
            maxWidth: "80%",
            margin: "0 auto",
          }}
        >
          <Button
            variant={"primary"}
            text={"Start planning"}
            onClick={handleStartPlanning}
          />
        </Box>
      </CustomModal>
      <CustomTypography
        sx={{
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "47px",
          textAlign: "center",
          margin: "32px 0px",
        }}
      >
        Hi David Laufeyson !
      </CustomTypography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Button variant={"primary"} text={"Generate a New Trip"} />
        <Button
          variant={"secondary"}
          text={"Create Manually"}
          onClick={toggleModal}
        />
      </Box>
    </Box>
  );
};

export default Home;
