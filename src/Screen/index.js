import { Switch } from "@material-ui/core";
import React from "react";
import { node } from "prop-types";
import Header from "../Header";

export default function Screen({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Screen.prototype = {
  children: node.isRequired,
};
