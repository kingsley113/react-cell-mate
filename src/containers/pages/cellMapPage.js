import React, { Component, useState } from "react";
import CellMap from "../../components/cellMap/cellMap";

const CellMapPage = (props) => {
	const [colorMode, setColorMode] = useState("cell-color")

  return (
    <div>
      this will be the cell map page
			
      <CellMap colorMode={}/>
    </div>
  );
  // TODO: will need a header, selector for color mode, and the map, and show color scale and user legend when on the respective modes
};

export default CellMapPage;

// TODO: use offCanvas panel for legend on map
// TODO: color mode selection, pass in prop to CellMap component for color mode
