import { CssBaseline } from "@material-ui/core";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PizzaListScreen from "../PizzaListScreen";
import CartScreen from "../CartScreen";

export default function App() {
  // state (useState): utilisé seulement à l'intérieur du composant

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route exact path="/" component={PizzaListScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Router>
    </ThemeProvider>
  );
}
