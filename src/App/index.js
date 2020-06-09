import React from "react";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../Header";
import PizzaList from "../PizzaList";
import { useQuery } from "react-query";
import { theme } from "./theme";
import PopinCart from "../PopinCart";

const fetchPizzas = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";
  //const baseUrlApi = "https://my-json-server.typicode.com/manza33/pizzeria-app";
  return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
};

export default function App() {
  // state (useState): utilisé seulement à l'intérieur du composant

  const { status, data, error } = useQuery("pizzas", fetchPizzas);
  const [popinCartOpen, setPopinCartOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header shoppingCartCount={3} />
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} />}
      <PopinCart open={popinCartOpen} />
    </ThemeProvider>
  );
}
