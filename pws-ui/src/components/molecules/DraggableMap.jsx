// import React from "react";
// import { useState, useEffect, useRef, useMemo, useCallback } from "react";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

// const center = {
//   lat: 51.505,
//   lng: -0.09,
// };
// function DraggableMarker() {
//   const [draggable, setDraggable] = useState(false);
//   const [position, setPosition] = useState(center);
//   const markerRef = useRef(null);

//   const eventHandlers = useMemo(
//     () => ({
//       dragend() {
//         const marker = markerRef.current;
//         if (marker != null) {
//           setPosition(marker.getLatLng());
//         }
//       },
//     }),
//     []
//   );
//   const toggleDraggable = useCallback(() => {
//     setDraggable((d) => !d);
//   }, []);

//   return (
//     <Marker
//       draggable={draggable}
//       eventHandlers={eventHandlers}
//       position={position}
//       ref={markerRef}
//     >
//       <Popup minWidth={90}>
//         <span onClick={toggleDraggable}>
//           {draggable
//             ? "Marker is draggable"
//             : "Click here to make marker draggable"}
//         </span>
//       </Popup>
//     </Marker>
//   );
// }
// const DraggableMap = () => {
//   return (
//     <MapContainer
//       center={center}
//       zoom={13}
//       scrollWheelZoom={false}
//       style={{ height: "45vh", width: "100%" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <DraggableMarker />
//     </MapContainer>
//   );
// };

// export default DraggableMap;


import React from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "./styles.css";

export default function DraggableMap() {
  const position = [51.505, -0.09];

  function MyComponent() {
    const map = useMapEvents({
      dragend: (e) => {
        console.log("mapCenter", e.target.getCenter());
        console.log("map bounds", e.target.getBounds());
      }
    });
    return null;
  }

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyComponent />
    </MapContainer>
  );
}
