import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import DraggableMarker from "./DraggableMarker";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";

const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  // shadowUrl: iconShadow,
  iconSize: [20, 30],
});

const Map = ({
  company,
  city,
  markerPosition,
  draggable,
  setPosition,
  position,
}) => {
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "400px", borderRadius: "0.5rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {draggable ? (

          <>
            {position && (
              <DraggableMarker setPosition={setPosition} icon={icon} />
            )}
          </>

        ) : (
          <Marker position={markerPosition} icon={icon}>
            <Popup>
              {company} <br />
              {city}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
