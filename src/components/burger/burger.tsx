import React, { FC, useState } from "react";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Burger: FC<{ border?: boolean }> = ({ border = true }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          position: "absolute",
          backgroundColor: border ? "#fff" : "transparent",
          boxShadow: border ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none",
          padding: border ? "25px 22px" : "37px",
          borderRadius: "18px",
          margin: border ? "4px 16px" : "0",
        }}
      >
        <MenuIcon sx={{ color: "#0E121B", fontSize: 28 }} />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "250px",
            backgroundColor: "#f5f5f5",
            padding: "16px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <List>
            {[
              { label: "Home", path: "/" },
              { label: "Trips", path: "/trips" },
              { label: "Profile", path: "/profile" },
              { label: "Logout", path: "/logout" },
            ].map((item) => (
              <ListItem
                key={item.label}
                button
                component={Link}
                to={item.path}
                sx={{
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#FF8C00",
                    color: "#fff",
                  },
                }}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Burger;
