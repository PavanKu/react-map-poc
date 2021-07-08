import React from "react";
import HolidaysWrapper from "./HolidaysWrapper";
import { GMapProvider } from "../../common/context/GoogleMap";
import CustomTileGMap from "./CustomTileGMap";

const CustomTileGoogleMap = () => {
  return (
    <GMapProvider>
      <CustomTileGMap />
      <HolidaysWrapper />
    </GMapProvider>
  );
};

export default CustomTileGoogleMap;
