import React from "react";
import { MapProvider } from "../../common/context/GoogleMap/MapContext";
import ImageGMap from "./ImageGMap";
import HolidaysWrapper from "./HolidaysWrapper";

const ImageOverlatGoogleMap = () => {
  return (
    <MapProvider>
      <ImageGMap />
      <HolidaysWrapper />
    </MapProvider>
  );
};

export default ImageOverlatGoogleMap;
