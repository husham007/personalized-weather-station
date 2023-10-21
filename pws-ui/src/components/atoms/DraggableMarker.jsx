import React from "react";
import "leaflet/dist/leaflet.css";
import { useState, useRef, useMemo, useCallback } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
const center = {
  lat: 60.278,
  lng: 24.865,
};

const DraggableMarker = ({ icon }) => {
  const [markerDragPosition, setMarkerDragPosition] = useState(center);

  const [currentLocation, setCurrentLocation] = useState(null);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setCurrentLocation(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;

        if (marker != null) {
          setMarkerDragPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  // console.log(markerDragPosition);
  return currentLocation === null ? null : (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={currentLocation}
      ref={markerRef}
      icon={icon}
    >
      <Popup minWidth={90}>
        <span>
          Your coordinates <br />
          Latitude: {markerDragPosition.lat.toFixed(3)}
          <br />
          Longitude: {markerDragPosition.lng.toFixed(3)}
        </span>
      </Popup>
    </Marker>
  );
};

export default DraggableMarker;
