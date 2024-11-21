import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import Burger from "../../components/burger/burger";
import { Logo } from "../../assets/logo";

const HomeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      <Burger />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <Logo />
      </Box>

      <Box
        sx={{
          flex: 1,
          padding: "16px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default HomeLayout;
