import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const Map = ({ company, city, markerPosition }) => {
  return (
    <div>
      <MapContainer
        center={markerPosition}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "45vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={markerPosition}>
          <Popup>
            {company} <br />
            {city}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
