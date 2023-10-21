import React from "react";
import {
  Container,
  CssBaseline,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import Map from "../atoms/Map";
import Address from "../atoms/Address";

const MapCard = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Card>
        <CssBaseline />

        <CardMedia>
          <Map
            company={"WeatherStation Oy"}
            city={"Helsinki"}
            markerPosition={[60.19928562367708, 24.93441320897156]}
            position={[60.19928562367708, 24.93441320897156]}
          />
        </CardMedia>

        <CardContent sx={{ bgcolor: "black" }}>
          <Address
            address={`WeatherStation Oy, Helsinki`}
            phone={"(358) 981 981 981"}
            email={"hello@perfectweather.com"}
            color={"white"}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default MapCard;
