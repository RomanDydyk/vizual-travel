import React, { useEffect } from "react";
import SearchDropdown from "../../components/global/searchDropDown/searchDropDown";
import CustomTypography from "../../components/global/typography/typography";
import HomeLayout from "../../layouts/homeLayout/homeLayout";
import { useLocation, useNavigate } from "react-router-dom";
import CustomModal from "../../components/global/modal/modal";
import Button from "../../components/global/button/button";
import Dropdown from "../../components/global/dropDown/dropDown";
import { LocationIcon } from "../../assets/location";
import { FoodIcon } from "../../assets/food";
import { SleepIcon } from "../../assets/sleep";
import { useTripStore } from "../../store/tripStore";
import { Box } from "@mui/material";

const dropdownItems = [
  {
    icon: <LocationIcon />,
    label: "Hotel",
  },
  {
    icon: <FoodIcon />,
    label: "Restaurant",
  },
  {
    icon: <SleepIcon />,
    label: "Accommodation",
  },
  {
    icon: <SleepIcon />,
    label: "Home",
  },
  {
    icon: <SleepIcon />,
    label: "Other",
  },
];

export const Trip = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tripTitle = queryParams.get("title");
  const { setTripTitle, addPoint } = useTripStore();
  const [startPoint, setStartPoint] = React.useState("");
  const [selectedType, setSelectedType] = React.useState<
    | {
        icon: React.ReactNode;
        label: string;
      }
    | undefined
  >();

  const selectStartPoint = (startPoint: string) => {
    setStartPoint(startPoint);
  };

  const clearStartPoint = () => {
    setStartPoint("");
  };

  const selectType = (item: { icon: React.ReactNode; label: string }) => {
    setSelectedType(item);
  };

  useEffect(() => {
    if (tripTitle) {
      setTripTitle(tripTitle);
    }
  }, [tripTitle]);

  const handleAddPoint = () => {
    if (startPoint && selectedType) {
      addPoint({
        point: startPoint,
        type: selectedType,
      });
      navigate("/trip-overview");
    }
  };

  return (
    <HomeLayout
      header={
        <CustomTypography>{tripTitle || "Trip Planning"}</CustomTypography>
      }
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchDropdown
          onSelect={selectStartPoint}
          items={[
            "BCN airport montreal canada",
            "Airport yul france",
            "airport yul montreal trudeau",
            "etc...",
          ]}
        />
        <CustomModal open={startPoint.length > 0} onClose={clearStartPoint}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CustomTypography
              sx={{ color: "#FF8447", textAlign: "center", fontWeight: "700" }}
            >
              {startPoint}
            </CustomTypography>
            <CustomTypography
              sx={{
                textAlign: "center",
                fontWeight: "700",
                margin: "20px 0px",
              }}
            >
              Address : Romeo Vachon, Dorval, QC
            </CustomTypography>
            <CustomTypography sx={{ textAlign: "center", fontWeight: "700" }}>
              Type of Point :
            </CustomTypography>

            <Box
              sx={{
                margin: "10px 0px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Dropdown
                placeholder="Select a type of point"
                items={dropdownItems}
                onSelect={selectType}
                selectedItem={selectedType}
              />
            </Box>

            <Button
              variant="primary"
              text="Add point"
              onClick={handleAddPoint}
            />
            <Button
              variant="secondary"
              text="Go Back"
              onClick={clearStartPoint}
            />
          </Box>
        </CustomModal>
      </Box>
    </HomeLayout>
  );
};

export default Trip;
