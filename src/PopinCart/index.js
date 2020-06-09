import React from "react";
import { bool } from "prop-types";
import Popin from "../Popin";

export default function PopinCart({ open }) {
  const actions = [{ label: "Annuler" }, { label: "Commander", primary: true }];

  return (
    <Popin open={open} title="Passer Commande" actions={actions}>
      Récapitulatif des pizzas en commande
    </Popin>
  );
}

PopinCart.propType = {
  open: bool,
};

PopinCart.defaultProps = {
  open: false,
};
