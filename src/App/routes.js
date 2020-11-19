import PizzaListScreen from "../PizzaListScreen/component";
import CartScreen from "../CartScreen";

export default {
  home: {
    path: "/",
    component: PizzaListScreen,
  },
  cart: {
    path: "/cart",
    component: CartScreen,
  },
};
