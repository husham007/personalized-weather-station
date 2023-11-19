import React from "react";
import "leaflet/dist/leaflet.css";
import { useState, useRef, useMemo, useEffect } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
const center = {
  lat: 60.278,
  lng: 24.865,
};

const DraggableMarker = ({ icon, setPosition }) => {
  const [markerDragPosition, setMarkerDragPosition] = useState(center);

  const [currentLocation, setCurrentLocation] = useState(null);

  const map = useMapEvents({
    click(e) {
      // map.locate(e);
      const newLocation = e.latlng;

      setCurrentLocation(newLocation);
      setMarkerDragPosition(newLocation);
      setPosition([newLocation.lat, newLocation.lng]);
      // map.flyTo(newLocation, map.getZoom());
    },
    locationfound(e) {
      const userLocation = e.latlng;
      setCurrentLocation(userLocation);
      setMarkerDragPosition(userLocation);
      setPosition([userLocation.lat, userLocation.lng]);
      map.flyTo(userLocation, map.getZoom());
    },
  });
  // console.log(markerDragPosition);
  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;

        if (marker != null) {
          setMarkerDragPosition(marker.getLatLng());

          setPosition([marker.getLatLng().lat, marker.getLatLng().lng]);
        }
      },
    }),
    []
  );

  useEffect(() => {
    map.locate();
  }, [map]);

  return currentLocation === null ? null : (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={currentLocation}
      ref={markerRef}
      icon={icon}
      onclick={() => console.log("Marker clicked!")}
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
