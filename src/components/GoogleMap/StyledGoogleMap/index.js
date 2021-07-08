import React from "react";
import HolidaysWrapper from "./HolidaysWrapper";
import { GMapProvider } from "../../common/context/GoogleMap";
import StyledGMap from "./StyledGMap";

const StyledGoogleMap = () => {
  return (
    <GMapProvider>
      <StyledGMap />
      <HolidaysWrapper />
    </GMapProvider>
  );
};

export default StyledGoogleMap;
