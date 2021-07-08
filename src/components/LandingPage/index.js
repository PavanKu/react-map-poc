import React from "react";
import { Link } from "react-router-dom";
import { ROUTING } from "../../constants";
import "./Landing.css";

const LandingPage = () => {
  return (
    <section className="link-page">
      <nav className="container">
        <ul className="list">
          {/* <li>
            <Link to={ROUTING.GMAP}>Google Map</Link>
          </li> */}
          <li>
            <Link to={ROUTING.STYLED_GMAP}>Styled - Google Map</Link>
          </li>
          <li>
            <Link to={ROUTING.STATES_GMAP}>State Boundaries - Google Map</Link>
          </li>
          <li>
            <Link to={ROUTING.IMAGE_GMAP}>Image Overlay - Google Map</Link>
          </li>
          <li>
            <Link to={ROUTING.TILES_GMAP}>Custom Tiles - Google Map</Link>
          </li>
        </ul>
        <ul className="list">
          <li>
            <Link to={ROUTING.IMAGE_LLMAP}>Image Overlay - Leaflet</Link>
          </li>
          <li>
            <Link to={ROUTING.TILES_LLMAP}>Custom Tiles - Leaflet</Link>
          </li>
          {/* <li>
            <Link to={ROUTING.LLMAP}>Leaflet Map</Link>
          </li> */}
        </ul>
        <ul className="list">
          <li>
            <Link to={ROUTING.MARKER_GENERATOR}>
              Marker Generator - Google Map
            </Link>
          </li>
          {/* <li>
            <Link to={ROUTING.DYNAMIC_GRID}>Dynamic Grid</Link>
          </li> */}
        </ul>
      </nav>
    </section>
  );
};

export default LandingPage;
