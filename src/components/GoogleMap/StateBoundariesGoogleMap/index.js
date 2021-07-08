import React from "react";
import { GMapProvider } from "../../common/context/GoogleMap";
import StateBoundariesGMap from "./StateBoundariesGMap";
import HolidaysWrapper from "./HolidaysWrapper";

const StateBoundariesGoogleMap = () => {
  return (
    <GMapProvider>
      <StateBoundariesGMap />
      <HolidaysWrapper />
    </GMapProvider>
  );
};

export default StateBoundariesGoogleMap;
