import React from "react";
import PizzaCard from "../PizzaCard";
import { arrayOf, shape } from "prop-types";
import { Typography } from "@material-ui/core";
import { isNilOrEmpty } from "ramda-adjunct";

export default function PizzaList({ data }) {
  //const imageSize = 175;

  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" component="p">
        Pas de Pizza en ce moment...
      </Typography>
    );

  // preciser l'id seulement dans la boucle.. pas dans PizzaCard
  return (
    <>
      {data.map(({ id, name, ingredients, imageUrl, price }) => (
        <PizzaCard
          key={id}
          name={name}
          ingredients={ingredients}
          imageUrl={imageUrl}
          price={price}
        />
      ))}
    </>
  );
}

PizzaList.protypes = {
  data: arrayOf(shape(PizzaCard.propTypes)),
};

PizzaList.defaultProps = {
  data: [],
};
