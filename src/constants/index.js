const GOOGLE_MAP_API_VERSION = "3.39";
const GOOGLE_MAP_API_KEY = "INSERT_GOOGLE_KEY";
const GMAP_SCRIPT_URL = `https://maps.googleapis.com/maps/api/js?v=${GOOGLE_MAP_API_VERSION}&key=${GOOGLE_MAP_API_KEY}`;
const INDIA_BOUNDS = {
  north: 36.228314884134,
  south: 3.3182023337626,
  west: 53.03516562499999,
  east: 110.33985312499999,
};

export const ROUTING = {
  ROOT: "/",
  GMAP: "/google-map",
  STYLED_GMAP: "/styled-gmap",
  IMAGE_GMAP: "/image-gmap",
  STATES_GMAP: "/states-gmap",
  TILES_GMAP: "/tiles-gmap",
  STYLED_LLMAP: "/styled-llmap",
  TILES_LLMAP: "/tiles-llmap",
  IMAGE_LLMAP: "/image-llmap",
  STATES_LLMAP: "/states-llmap",
  LLMAP: "/leaflet-map",
  MARKER_GENERATOR: "/marker-generator",
  DYNAMIC_GRID: "/dynamic-grid",
};

export const GMAP = {
  SCRIPT: GMAP_SCRIPT_URL,
  CONTAINER_ID: "gmap-container",
  CONFIG: {
    center: {
      lat: 20.5937,
      lng: 78.9629,
    },
    zoom: 5,
    backgroundColor: "#f7f7f7",
    clickableIcons: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: true,
    fullscreenControl: false,
    keyboardShortcuts: false,
    /* restriction: {
      latLngBounds: INDIA_BOUNDS,
      strictBounds: false,
    }, */
  },
};

const LLMAP_SCRIPT_URL = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
const LLMAP_SCRIPT_INTEGRITY =
  "sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==";
const LLMAP_STYLE_URL = `https://unpkg.com/leaflet@1.7.1/dist/leaflet.css`;
const LLMAP_STYLE_INTEGRITY =
  "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==";

export const LLMAP = {
  SCRIPT: {
    url: LLMAP_SCRIPT_URL,
    integrity: LLMAP_SCRIPT_INTEGRITY,
  },
  STYLE: {
    url: LLMAP_STYLE_URL,
    integrity: LLMAP_STYLE_INTEGRITY,
  },
  CONTAINER_ID: "llmap-container",
  CONFIG: {
    center: {
      lat: 20.5937,
      lng: 78.9629,
    },
    zoom: 5,
    zoomControl: false,
  },
};
