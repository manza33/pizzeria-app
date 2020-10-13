import { CssBaseline, CircularProgress } from "@material-ui/core";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { useList } from "react-use";
import { useQuery } from "react-query";
import Header from "../Header";
import PizzaList from "../PizzaList";
import PopinCart from "../PopinCart";
import React from "react";

const fetchPizzas = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";
  return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
};

export default function App() {
  // state (useState): utilisé seulement à l'intérieur du composant

  const { status, data } = useQuery("pizzas", fetchPizzas);
  const [popinCartOpen, setPopinCartOpen] = React.useState(false);
  const [cart, { push, reset }] = useList([]); // ['Reine', 'Savoyarde']

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
      <PopinCart
        open={popinCartOpen}
        hidePopinCart={hidePopinCart}
        reset={reset}
        cart={cart}
      />
    </ThemeProvider>
  );
}
