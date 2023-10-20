// import React from "react";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// const Map = ({ company, city, markerPosition }) => {
//   return (
//     <div>
//       <MapContainer
//         center={markerPosition}
//         zoom={13}
//         scrollWheelZoom={true}
//         style={{ height: "45vh", width: "100%" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={markerPosition}>
//           <Popup>
//             {company} <br />
//             {city}
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({
  company,
  city,
  markerPosition,
  draggable,
  setPosition,
  position,
}) => {
  function MyComponent() {
    const map = useMapEvents({
      click(e) {
        // console.log(e.latlng);
        setPosition(e.latlng);
      },
    });
    return null;
  }

  return (
    <div>
      <MapContainer
        center={markerPosition}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "45vh", width: "100%", borderRadius: "0.5rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {draggable ? (
          <>
            <MyComponent />
            {position && (
              <Marker position={[position.lat, position.lng]}>
                <Popup>
                  Your coordinates <br />
                  Latitude: {position.lat.toFixed(3)}
                  <br />
                  Longitude: {position.lng.toFixed(3)}
                </Popup>
              </Marker>
            )}
          </>
        ) : (
          <Marker position={markerPosition}>
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
