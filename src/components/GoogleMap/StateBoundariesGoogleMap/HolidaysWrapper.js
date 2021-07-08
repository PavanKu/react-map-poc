import React from "react";
import Holidays from "../../common/components/Holidays";
import { useMap } from "../../common/context/GoogleMap/MapContext";

const HolidaysWrapper = () => {
  const { goToLocation } = useMap();
  return <Holidays goToLocation={goToLocation} />;
};

export default HolidaysWrapper;
