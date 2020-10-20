import { CssBaseline } from "@material-ui/core";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";

export default function App() {
  // state (useState): utilisé seulement à l'intérieur du composant

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {Object.values(routes).map((route) => (
          <Route key={route.path} exact {...route} />
        ))}
      </Router>
    </ThemeProvider>
  );
}
