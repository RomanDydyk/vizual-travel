import React, { useState } from "react";
import { Box, Typography, Fade, List, ListItem } from "@mui/material";
import { ArrowIcon } from "../../../assets/arrow";
import { MessageIcon } from "../../../assets/message";

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

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: { icon: React.ReactNode; label: string }) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <Box sx={{ position: "relative", width: "250px" }}>
      <Box
        onClick={handleToggle}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: "24px",
          cursor: "pointer",
          textAlign: "center",
          padding: "10px",
          border: "1px solid #E0E0E0",
          backdropFilter: isOpen ? "blur(50px)" : "none",
          boxShadow: isOpen
            ? "0px 4px 4px 0px #0000000D, 0px 1px 0px 0px #0000000D, 0px 20px 50px 0px #FFFFFF26 inset"
            : "none",
        }}
      >
        {selectedItem ? (
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#84858E",
                marginBottom: "5px",
              }}
            >
              {selectedItem.label}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedItem.icon}
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#84858E",
                marginBottom: "5px",
              }}
            >
              {placeholder}
            </Typography>
            <MessageIcon />
          </Box>
        )}
        <Box
          sx={{
            marginLeft: "8px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <ArrowIcon />
        </Box>
      </Box>
      {isOpen && (
        <Fade in={isOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: 0,
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              zIndex: 10,
            }}
          >
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
                      }}
                    >
                      {item.icon}
                      <Typography
                        sx={{
                          ml: 2,
                          fontWeight: 700,
                        }}
                      >
                        {item.label}
                      </Typography>
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
