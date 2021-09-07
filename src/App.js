import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

import { customTheme } from "./theme";
import Navbar from "./components/Navbar";

function App() {
  return (
    <MuiThemeProvider theme={customTheme}>
      <Router>
        <Navbar />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
