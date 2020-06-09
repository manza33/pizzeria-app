import React from "react";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../Header";
import PizzaList from "../PizzaList";
import { useQuery } from "react-query";
import { theme } from "./theme";
import PopinCart from "../PopinCart";
import { useList } from "react-use";

const fetchPizzas = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";
  return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
};

export default function App() {
  // state (useState): utilisé seulement à l'intérieur du composant

  const { status, data, error } = useQuery("pizzas", fetchPizzas);
  const [popinCartOpen, setPopinCartOpen] = React.useState(false);
  const [cart, { push }] = useList([]); // ['Reine', 'Savoyarde']

  const DisplayPopinCart = () => {
    setPopinCartOpen(true);
  };

  const hidePopinCart = () => {
    setPopinCartOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        shoppingCartCount={cart.length}
        DisplayPopinCart={DisplayPopinCart}
      />
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} addToCart={push} />}
      <PopinCart open={popinCartOpen} hidePopinCart={hidePopinCart} />
    </ThemeProvider>
  );
}
