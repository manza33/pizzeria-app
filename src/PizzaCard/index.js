import React from "react";
import { Typography, CardContent, Card, CardMedia } from "@material-ui/core";
import { arrayOf, string, number } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Price from "../Price";

const imageSize = 175;

const useStyles = makeStyles({
  root: {
    maxWidth: 175,
  },
});

export default function PizzaCard({ name, ingredients, price, imageUrl }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {imageUrl && (
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={imageUrl}
          title="Pizza "
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {ingredients.join(", ")}
        </Typography>
        <Typography variant="h4" component="p">
          <Price value={price} />
        </Typography>
      </CardContent>
    </Card>
  );
}

PizzaCard.propTypes = {
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
};

PizzaCard.defaultProps = {
  imageUrl: null,
};
