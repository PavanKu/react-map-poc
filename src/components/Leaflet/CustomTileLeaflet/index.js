import React from "react";
import { LLMapProvider } from "../../common/context/Leaflet";
import CustomTileLLMap from "./CustomTileLLMap";
import HolidaysWrapper from "./HolidaysWrapper";

const CustomTileLeaflet = () => {
  return (
    <LLMapProvider>
      <CustomTileLLMap />
      <HolidaysWrapper />
    </LLMapProvider>
  );
};

export default CustomTileLeaflet;
