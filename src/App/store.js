import { applyMiddleware, createStore, combineReducers } from "redux";
import pizzasReducer from "../pizzas/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware()));

// import {​​​​​​​​ applyMiddleware, createStore, combineReducers }​​​​​​​​ from"redux";
// importreducerfrom"./pizzas/reducer";
// import {​​​​​​​​ composeWithDevTools }​​​​​​​​ from"redux-devtools-extension";

// constrootReducer = combineReducers({​​​​​​​​
// pizzas:reducer,
// }​​​​​​​​);

// exportdefaultcreateStore(rootReducer, composeWithDevTools(applyMiddleware()));
