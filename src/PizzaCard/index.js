import React from "react";
import {
  Typography,
  CardContent,
  Card,
  CardMedia,
  CardActions,
  Button,
  IconButton,
} from "@material-ui/core";
import { arrayOf, string, number, func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";

import Price from "../Price";
import { theme } from "../App/theme";
import { PIZZAS_MAX_COUNT, PIZZAS_MIN_COUNT } from "../pizzas";

//const imageSize = 175;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(2)}px`,
  },
  button: {
    flexGrow: 1,
  },
}));

export default function PizzaCard({
  id,
  name,
  ingredients,
  price,
  imageUrl,
  addToCart,
}) {
  const classes = useStyles();

  const [pizzaCount, setPizzaCount] = React.useState(1);
  const decrement = () =>
    setPizzaCount(Math.max(PIZZAS_MIN_COUNT, pizzaCount - 1));
  const increment = () =>
    setPizzaCount(Math.min(pizzaCount + 1, PIZZAS_MAX_COUNT));

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
        <IconButton aria-label="moins" onClick={decrement}>
          <IndeterminateCheckBox fontSize="inherit" />
        </IconButton>
        <span>{pizzaCount}</span>
        <IconButton aria-label="plus" onClick={increment}>
          <AddBox fontSize="inherit" />
        </IconButton>
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => {
            addToCart({ id, name, price, addedAt: Date.now() });
          }}
        >
          Ajouter
        </Button>
      </CardActions>
    </Card>
  );
}

PizzaCard.propTypes = {
  onClick: func,
  id: number,
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
};

PizzaCard.defaultProps = {
  imageUrl: null,
  onClick: Function.prototype,
};
