import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  //Button,
  IconButton,
  Badge,
} from "@material-ui/core";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { number } from "prop-types";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

export default function Header({ shoppingCartCount }) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Pizza à Nico
        </Typography>
        <IconButton aria-label={`${shoppingCartCount} pizzas`} color="inherit">
          <Badge badgeContent={shoppingCartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProps = {
  shoppingCartCount: 0,
};
Header.propTypes = {
  shoppingCartCount: number,
};
