import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Fade,
  List,
  ListItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DropDownItem from "../../dropDownItem/dropDownItem";
import CustomTypography from "../typography/typography";

interface DropdownProps {
  items: { icon: React.ReactNode; label: string }[];
  placeholder?: string;
  onSelect: (item: { icon: React.ReactNode; label: string }) => void;
  selectedItem?: { icon: React.ReactNode; label: string };
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  placeholder = "Select...",
  onSelect,
  selectedItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleSelect = (item: { icon: React.ReactNode; label: string }) => {
    onSelect(item);
    setIsOpen(false);
  };
  console.log(selectedItem);
  return (
    <Box sx={{ position: "relative", width: "300px" }}>
      <Typography
        onClick={handleOpen}
        sx={{
          padding: "10px 15px",
          backgroundColor: "#F8F8F8",
          borderRadius: "8px",
          cursor: "pointer",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {selectedItem ? (
          <DropDownItem item={selectedItem} sx={{ fontWeight: 700 }} />
        ) : (
          placeholder
        )}
      </Typography>
      {isOpen && (
        <Fade in={isOpen}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              mt: 2,
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>

            <List
              sx={{
                maxHeight: "200px",
                overflowY: "auto",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#D1D1D1",
                  borderRadius: "3px",
                },
              }}
            >
              {items.length > 0 ? (
                items.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "8px 16px",
                      color: "#000000",
                      cursor: "pointer",
                      ":hover": { bgcolor: "#F0F0F0" },
                    }}
                    onClick={() => handleSelect(item)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                      <CustomTypography
                        sx={{
                          ml: 2,
                          fontWeight: 700,
                        }}
                      >
                        {item.label}
                      </CustomTypography>
                    </Box>
                  </ListItem>
                ))
              ) : (
                <Typography
                  sx={{ textAlign: "center", p: 2, color: "#A0A0A0" }}
                >
                  No items available
                </Typography>
              )}
            </List>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default Dropdown;
