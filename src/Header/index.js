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
import routes from "../App/routes";

export default function Header({ shoppingCartCount }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.title}
          component={Link}
          to={routes.home.path}
        >
          Pizza à Nico
        </Typography>
        <IconButton
          aria-label={`${shoppingCartCount} pizzas`}
          color="inherit"
          component={Link}
          to={routes.cart.path}
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
};

Header.defaultProps = {
  shoppingCartCount: 0,
};
