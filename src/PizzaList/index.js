import React from "react";
import PizzaCard from "../PizzaCard";
import { arrayOf, shape } from "prop-types";
import { Typography } from "@material-ui/core";
import { isNilOrEmpty } from "ramda-adjunct";
import Grid from "@material-ui/core/Grid";

export default function PizzaList({ data }) {
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
          />
        </Grid>
      ))}
    </Grid>
  );
}

PizzaList.protypes = {
  data: arrayOf(shape(PizzaCard.propTypes)),
};

PizzaList.defaultProps = {
  data: [],
};
