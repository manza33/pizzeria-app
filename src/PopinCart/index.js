import React from "react";
import { bool, func } from "prop-types";
import Popin from "../Popin";

export default function PopinCart({ open, hidePopinCart }) {
  const actions = [
    { label: "Annuler", onClick: hidePopinCart },
    { label: "Commander", primary: true },
  ];

  return (
    <Popin
      open={open}
      onClose={hidePopinCart}
      title="Passer Commande"
      actions={actions}
    >
      Récapitulatif des pizzas en commande
    </Popin>
  );
}

PopinCart.propType = {
  open: bool,
  hidePopinCart: func,
};

PopinCart.defaultProps = {
  open: false,
  hidePopinCart: Function.prototype,
};
