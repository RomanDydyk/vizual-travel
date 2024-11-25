import { ThemeProvider } from "@mui/material";
import AppRouter from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
