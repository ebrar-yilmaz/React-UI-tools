import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Mini from "../images/mini.png";
function MUICard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="mini cooper" height="210" image={Mini} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mİni Cooper
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          çok güzel araba ben bir gün buna bineceğim.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Satın Al</Button>
        <Button size="small">İletişime Geç</Button>
      </CardActions>
    </Card>
  );
}

export default MUICard;
