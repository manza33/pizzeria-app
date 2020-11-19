import { useQuery } from "react-query";
import PizzasNicofetch from "../PizzasNicoFetch";

export default function usePizzas() {
  return useQuery("pizzas", PizzasNicofetch("/pizzas"), {
    refetchOnWindowFocus: false,
  });
}
