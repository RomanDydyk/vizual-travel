import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #f5f5f5, #ffffff)",
      }}
    >
      <CircularProgress
        sx={{
          color: "#FF8C00",
          marginBottom: "16px",
          animation: "rotate 2s linear infinite",
        }}
        thickness={5}
        size={64}
      />
      <Typography
        variant="h6"
        sx={{
          color: "#FF8C00",
          fontWeight: "bold",
          fontSize: "18px",
          textTransform: "uppercase",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Loader;
