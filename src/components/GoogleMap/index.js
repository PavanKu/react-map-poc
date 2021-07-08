import React from "react";
import HolidaysWrapper from "./HolidaysWrapper";
import { GMapProvider } from "../common/context/GoogleMap";
import StyledGMap from "./StyledGoogleMap/StyledGMap";
import ImageGMap from "./ImageOverlayGoogleMap/ImageGMap";
import CustomTileGMap from "./CustomTileGoogleMap/CustomTileGMap";
import StateBoundariesGMap from "./StateBoundariesGoogleMap/StateBoundariesGMap";

const GoogleMap = () => {
  return (
    <GMapProvider>
      {/* <StyledGMap /> */}
      <ImageGMap />
      {/* <CustomTileGMap /> */}
      <StateBoundariesGMap />
      <HolidaysWrapper />
    </GMapProvider>
  );
};

export default GoogleMap;
