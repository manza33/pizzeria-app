import React from "react";
import { CircularProgress } from "@material-ui/core";

import Screen from "../Screen";
import { useList } from "react-use";
import { useQuery } from "react-query";
import PizzaList from "../PizzaList";

const fetchPizzas = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";
  return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
};

export default function PizzaListScreen() {
  const { status, data } = useQuery("pizzas", fetchPizzas);
  const [cart, { push, reset }] = useList([]); // ['Reine', 'Savoyarde']

  return (
    <Screen>
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} addToCart={push} />}
    </Screen>
  );
}
