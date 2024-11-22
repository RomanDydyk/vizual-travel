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

const fetchLocations = async (query) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const endpoint = `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=${API_KEY}`;

  try {
    const places: string[] = [];
    const response = await fetch(endpoint);
    const data = await response.json();
    data.features.forEach((feature) =>
      places.push(feature.properties.formatted)
    );

    return places;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
};

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
  const { setTripTitle, addPoint, points, editPoint } = useTripStore();
  const [startPoint, setStartPoint] = React.useState("");
  const [selectedType, setSelectedType] = React.useState<
    | {
        icon: React.ReactNode;
        label: string;
      }
    | undefined
  >();

  const [locations, setLocations] = React.useState([]);

  const selectStartPoint = (startPoint: string) => {
    setStartPoint(startPoint);
  };

  const clearStartPoint = () => {
    setStartPoint("");
  };

  const selectType = (item: { icon: React.ReactNode; label: string }) => {
    setSelectedType(item);
  };

  const handleSearch = async (query) => {
    if (query) {
      const result = await fetchLocations(query);
      setLocations(result);
    } else {
      setLocations([]);
    }
  };

  useEffect(() => {
    if (tripTitle) {
      setTripTitle(tripTitle);
    }
  }, [tripTitle]);

  useEffect(() => {
    const pointToEdit = localStorage.getItem("editPoint");
    if (pointToEdit) {
      const point = JSON.parse(pointToEdit);
      const pointId = point.id;

      const pointIndex = points.findIndex((point) => point.id === pointId);
      if (pointIndex !== -1) {
        const point = points[pointIndex];
        setStartPoint(point.point);
      }
    }
  }, []);

  const handleAddPoint = () => {
    if (startPoint && selectedType) {
      const editPointItem = localStorage.getItem("editPoint");
      if (editPointItem) {
        const point = JSON.parse(editPointItem);
        const pointId = point.id;
        editPoint(pointId, {
          point: startPoint,
          type: selectedType,
          id: pointId,
        });
      } else {
        addPoint({
          point: startPoint,
          type: selectedType,
        });
      }

      localStorage.removeItem("editPoint");
      navigate("/trip-overview");
    }
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
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchDropdown
          onSelect={selectStartPoint}
          placeholder={
            points.length === 0 ? "Enter a start point" : "Add another point"
          }
          onSearch={handleSearch}
          items={locations}
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
