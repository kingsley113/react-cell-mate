import React, { Component } from "react";
import { useSelector } from "react-redux";
import CellTable from "../../components/cells/cellTable";
import LoadingSpinner from "../../components/general/loadingSpinner";

const CellIndexPage = () => {
  const allCells = useSelector((state) => state.cells.allCells);

  if (allCells) {
    return (
      <div>
        <h2>Cell Index</h2>
        <CellTable cells={allCells} />
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
  // TODO: new cell button
};

export default CellIndexPage;

/* 
TODO: columns:
color
title
% complete
# of open tasks
priority
x coordinate
y coordinate
assign region
user

**This cell list component should be generic enough to reuse for other areas, pass in cells as prop**
*/
