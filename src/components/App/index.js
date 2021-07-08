import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import StyledGoogleMap from "../GoogleMap/StyledGoogleMap";
import ImageOverlatGoogleMap from "../GoogleMap/ImageOverlayGoogleMap";
import MarkerConfigGenerator from "../MarkerConfigGenerator";
import StateBoundariesGoogleMap from "../GoogleMap/StateBoundariesGoogleMap";
import ImageOverlayLeafletMap from "../Leaflet/ImageOverlayLeaflet";
import CustomTileGoogleMap from "../GoogleMap/CustomTileGoogleMap";
import CustomTileLeaflet from "../Leaflet/CustomTileLeaflet";
import { ROUTING } from "../../constants";
import GoogleMap from "../GoogleMap";
import "./App.css";
import LeafletMap from "../Leaflet";
// import DynamicGrid from "../DynamicGrid";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTING.ROOT} exact>
          <LandingPage />
        </Route>
        <Route path={ROUTING.STYLED_GMAP}>
          <StyledGoogleMap />
        </Route>
        {/* <Route path={ROUTING.GMAP}>
          <GoogleMap />
        </Route> */}
        <Route path={ROUTING.IMAGE_GMAP}>
          <ImageOverlatGoogleMap />
        </Route>
        <Route path={ROUTING.STATES_GMAP}>
          <StateBoundariesGoogleMap />
        </Route>
        <Route path={ROUTING.TILES_GMAP}>
          <CustomTileGoogleMap />
        </Route>
        <Route path={ROUTING.TILES_LLMAP}>
          <CustomTileLeaflet />
        </Route>
        <Route path={ROUTING.IMAGE_LLMAP}>
          <ImageOverlayLeafletMap />
        </Route>
        <Route path={ROUTING.MARKER_GENERATOR}>
          <MarkerConfigGenerator />
        </Route>
        {/* <Route path={ROUTING.LLMAP}>
          <LeafletMap />
        </Route> */}
        {/* <Route path={ROUTING.DYNAMIC_GRID}>
          <DynamicGrid />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
