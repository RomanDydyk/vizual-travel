import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import Burger from "../../components/burger/burger";
import { Logo } from "../../assets/logo";

const HomeLayout: FC<{
  children: ReactNode;
  header?: ReactNode;
  burgerBorder?: boolean;
}> = ({ children, header, burgerBorder }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      <Burger border={burgerBorder} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px 16px 16px 16px",
        }}
      >
        {header ?? <Logo />}
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
