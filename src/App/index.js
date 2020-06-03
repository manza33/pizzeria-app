import React from "react";
import { Button, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <h1>Pizza a Nico</h1>
        <Button variant="contained" color="primary">
          Coucou
        </Button>
      </header>
    </ThemeProvider>
  );
}
