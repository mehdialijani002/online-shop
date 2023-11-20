import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function WorldMap() {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ width: "100%", height: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default WorldMap;
