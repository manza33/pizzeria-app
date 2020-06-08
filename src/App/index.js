import React from "react";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../Header";
import PizzaList from "../PizzaList";
import { useQuery } from "react-query";

import { theme } from "./theme";

const fetchPizzas = () =>
  fetch("http://localhost:3001/pizzas").then((response) => response.json());

export default function App() {
  // state (useState): utilisé seulement à l'intérieur du composant

  const { status, data, error } = useQuery("pizzas", fetchPizzas);

  //const [pizzas, setPizzas] = React.useState([]);
  // React.useEffect(() => {
  //   fetch("http://localhost:3001/pizzas")
  //     .then((response) => response.json())
  //     .then((pizzas) => setPizzas(pizzas));
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header shoppingCartCount={3} />
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} />}
    </ThemeProvider>
  );
}
