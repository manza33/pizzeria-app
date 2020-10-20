import React from "react";

import Screen from "../Screen";
import Cart from "../Cart";
import { useList } from "react-use";

export default function CartScreen() {
  const [cart] = useList([
    { id: 1, name: "Pizza", price: 10.99, addedDate: Date.now() },
    { id: 1, name: "Pizza", price: 10.99, addedDate: Date.now() },
    { id: 1, name: "Pizza", price: 10.99, addedDate: Date.now() },
    { id: 1, name: "Pizza", price: 10.99, addedDate: Date.now() },
    { id: 1, name: "Pizza", price: 10.99, addedDate: Date.now() },
    { id: 1, name: "Pizza", price: 10.99, addedDate: Date.now() },
  ]);

  return (
    <Screen>
      <Cart cart={cart} />
    </Screen>
  );
}
