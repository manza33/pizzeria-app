import { arrayOf, shape, func } from "prop-types";
import { isNilOrEmpty } from "ramda-adjunct";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PizzaCard from "../PizzaCard";
import React from "react";

export default function PizzaList({ data, addToCart }) {
  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" component="p">
        Pas de Pizza en ce moment...
      </Typography>
    );

  // preciser l'id seulement dans la boucle.. pas dans PizzaCard
  return (
    <Grid container justify="center" justify="space-between">
      {data.map(({ id, name, ingredients, imageUrl, price }) => (
        <Grid key={id} item xs={6}>
          <PizzaCard
            name={name}
            ingredients={ingredients}
            imageUrl={imageUrl}
            price={price}
            addToCart={addToCart}
          />
        </Grid>
      ))}
    </Grid>
  );
}

PizzaList.protypes = {
  data: arrayOf(shape(PizzaCard.propTypes)),
  addToCart: func,
};

PizzaList.defaultProps = {
  data: [],
  addToCart: Function.prototype,
};
