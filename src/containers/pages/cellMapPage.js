import React, { Component } from "react";
import CellMap from "../../components/cellMap/cellMap";

class CellMapPage extends Component {
  render() {
    return (
      <div>
        this will be the cell map page
        <CellMap />
      </div>
    );
    // TODO: will need a header, selector for color mode, and the map, and show color scale and user legend when on the respective modes
  }
}

export default CellMapPage;

// TODO: use offCanvas panel for legend on map
// TODO: color mode selection, pass in prop to CellMap component for color mode
