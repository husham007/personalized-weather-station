import React from "react";
import {
  Container,
  CssBaseline,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

import Map from "../atoms/Map";
import Address from "../atoms/Address";

const MapCard = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Card
        sx={{
          maxWidth: 600,
        }}
      >
        <CssBaseline />

        <CardMedia>
          <Map />
        </CardMedia>
        <CardContent sx={{ bgcolor: "black" }}>
          <Address />
        </CardContent>
      </Card>
    </Container>
  );
};

export default MapCard;
