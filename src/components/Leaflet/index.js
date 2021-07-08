import React from "react";
import { LLMapProvider } from "../common/context/Leaflet";
import HolidaysWrapper from "./HolidaysWrapper";
import ImageOverlayLLMap from "./ImageOverlayLeaflet/ImageOverlayLLMap";
import CustomTileLLMap from "./CustomTileLeaflet/CustomTileLLMap";

const LeafletMap = () => {
  return (
    <LLMapProvider>
      {/* <ImageOverlayLLMap /> */}
      <CustomTileLLMap />
      <HolidaysWrapper />
    </LLMapProvider>
  );
};

export default LeafletMap;
