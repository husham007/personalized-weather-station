import React from "react";
import {
  Container,
  CssBaseline,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Map from "../atoms/Map";
import Address from "../atoms/Address";

const MapCard = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Card>
        <CssBaseline />

        <CardMedia>
          <MapContainer
            center={[60.19928562367708, 24.93441320897156]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "400px", borderRadius: "0.5rem" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[60.19928562367708, 24.93441320897156]}>
              <Popup>
                WeatherStation Oy <br /> Helsinki.
              </Popup>
            </Marker>
          </MapContainer>
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
