import { bool, func, arrayOf, shape, number, string } from "prop-types";
import { isNotEmpty } from "ramda-adjunct";
import Popin from "../Popin";
import Price from "../Price";
import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

export default function PopinCart({ open, hidePopinCart, cart, reset }) {
  const actions = [
    { label: "Annuler", onClick: hidePopinCart },
    {
      label: "Commander",
      primary: true,
      onClick: () => {
        reset();
        hidePopinCart();
      },
    },
  ];

  return (
    <Popin
      open={open}
      onClose={hidePopinCart}
      title="Passer Commande"
      actions={actions}
    >
      {isNotEmpty(cart) ? (
        <TableContainer component={Paper}>
          <Table size="small" aria-label="Mes Pizzas">
            <TableHead>
              <TableRow>
                <TableCell>Pizza</TableCell>
                <TableCell align="right">Prix</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map(({ addedAt, name, price }) => (
                <TableRow key={addedAt}>
                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell align="right">
                    <Price value={price} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "Pas de pizza sélectionnée"
      )}
    </Popin>
  );
}

PopinCart.propType = {
  open: bool,
  hidePopinCart: func,
  cart: arrayOf(
    shape({
      id: number,
      name: string,
      price: number,
      addedAt: number,
    })
  ),
  reset: func,
};

PopinCart.defaultProps = {
  open: false,
  hidePopinCart: Function.prototype,
  reset: Function.prototype,
  cart: [],
};
