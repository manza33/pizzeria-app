import { INIT_PIZZAS } from "./actions";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT_PIZZAS:
      return action.payload.pizzas;

    default:
      return state;
  }
}
