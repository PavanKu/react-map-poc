/**
 * https://developers.google.com/maps/documentation/javascript/examples/maptype-overlay
 */
class CustomGoogleMapType {
  constructor(tileSize) {
    this.maxZoom = 19;
    this.tileSize = tileSize;
  }
  getTile(coord, zoom, ownerDocument) {
    const div = ownerDocument.createElement("div");
    div.style.width = this.tileSize.width + "px";
    div.style.height = this.tileSize.height + "px";
    div.style.background = "#41949b";
    return div;
  }
  releaseTile(tile) {}
}

export default CustomGoogleMapType;
