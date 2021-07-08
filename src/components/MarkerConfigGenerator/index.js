import React from "react";
import { GMapProvider } from "../common/context/GoogleMap";
import ConfigGenerator from "./ConfigGenerator";

const MarkerConfigGenerator = () => {
  return (
    <GMapProvider>
      <ConfigGenerator />
    </GMapProvider>
  );
};

export default MarkerConfigGenerator;
