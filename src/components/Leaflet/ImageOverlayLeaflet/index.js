import React from "react";
import { LLMapProvider } from "../../common/context/Leaflet";
import HolidaysWrapper from "./HolidaysWrapper";
import ImageOverlayLLMap from "./ImageOverlayLLMap";

const ImageOverlayLeafletMap = () => {
  return (
    <LLMapProvider>
      <ImageOverlayLLMap />
      <HolidaysWrapper />
    </LLMapProvider>
  );
};

export default ImageOverlayLeafletMap;
