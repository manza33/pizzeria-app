import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../Header";
import PizzaCard from "../PizzaCard";

import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header shoppingCartCount={3} />
      <PizzaCard
        name="Reine"
        ingredients={["Tomates", "Champignons", "olives"]}
        price={8.99}
      />
    </ThemeProvider>
  );
}
