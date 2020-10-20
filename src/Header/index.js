import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { func, number } from "prop-types";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function Header({ shoppingCartCount, DisplayPopinCart }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.title}
          component={Link}
          to="/"
        >
          Pizza à Nico
        </Typography>
        <IconButton
          aria-label={`${shoppingCartCount} pizzas`}
          color="inherit"
          onClick={DisplayPopinCart}
          component={Link}
          to="/Cart"
        >
          <Badge badgeContent={shoppingCartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  shoppingCartCount: number,
  DisplayPopinCart: func,
};

Header.defaultProps = {
  shoppingCartCount: 0,
  DisplayPopinCart: Function.prototype,
};
