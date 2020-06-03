import React from "react";
import { Typography, CardContent, Card, CardMedia } from "@material-ui/core";
import { string } from "prop-types";

export default function PizzaCard({ name }) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="Pizza"
        height="140"
        image="logo192.png"
        title="Pizza "
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

PizzaCard.propTypes = {
  name: string.isRequired,
};
