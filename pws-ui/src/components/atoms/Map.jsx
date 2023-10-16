import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <div>
      <MapContainer
        center={[60.19928562367708, 24.93441320897156]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "45vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[60.19928562367708, 24.93441320897156]}>
          <Popup>
            WeatherStation Oy <br />
            Helsinki
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
