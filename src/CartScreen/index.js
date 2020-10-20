import React from "react";

import Screen from "../Screen";
import PopinCart from "../PopinCart";
import { useList } from "react-use";

// const [popinCartOpen, setPopinCartOpen] = React.useState(false);
// const [cart, { push, reset }] = useList([]); // ['Reine', 'Savoyarde']

// const DisplayPopinCart = () => {
//   setPopinCartOpen(true);
// };

// const hidePopinCart = () => {
//   setPopinCartOpen(false);
// };

export default function CartScreen() {
  const [cart] = useList([]);
  return (
    <Screen>
      <PopinCart
      //cart={[]}
      // open={popinCartOpen}
      // hidePopinCart={hidePopinCart}
      // reset={reset}
      // cart={cart}
      />
    </Screen>
  );
}
