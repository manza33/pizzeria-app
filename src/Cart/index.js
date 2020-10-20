import { bool, func, arrayOf, shape, number, string } from "prop-types";
import { isEmpty } from "ramda";
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
  Typography,
} from "@material-ui/core";

export default function Cart({ cart }) {
  if (isEmpty(cart)) return <Typography>Pas de pizza</Typography>;

  return (
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
  );
}

Cart.propType = {
  cart: arrayOf(
    shape({
      id: number,
      name: string,
      price: number,
      addedAt: number,
    })
  ),
};

Cart.defaultProps = {
  cart: [{ id: 1, name: "pizza", price: 10.99, addedDate: Date.now() }],
};
