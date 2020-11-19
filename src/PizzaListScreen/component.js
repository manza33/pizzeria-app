import React from "react";
import { CircularProgress } from "@material-ui/core";
import { func } from "prop-types";

import Screen from "../Screen";
import PizzaList from "../PizzaList/component";
import usePizzas from "../usePizzas";
//import { INIT_PIZZAS } from "../pizzas/actions";

export default function PizzaListScreen({ initPizzas }) {
  const { isFetching, data: pizzas } = usePizzas();
  initPizzas(pizzas);

  return (
    <Screen>
      {isFetching && <CircularProgress />}
      {<PizzaList />}
    </Screen>
  );
}

PizzaListScreen.prototype = {
  initPizzas: func,
};

PizzaListScreen.defaultProps = {
  initPizzas: Function.prototype,
};
