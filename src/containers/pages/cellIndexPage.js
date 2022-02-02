import React, { Component } from "react";
import { useSelector } from "react-redux";
import CellTable from "../../components/cells/cellTable";
import LoadingSpinner from "../../components/general/loadingSpinner";

const CellIndexPage = () => {
  const allCells = useSelector((state) => state.cells.allCells);
  const pageTitle = "Cell Index";

  if (allCells) {
    return (
      <div>
        <h2>{pageTitle}</h2>
        <CellTable cells={allCells} />
      </div>
    );
  } else {
    return (
      <div>
        <h2>{pageTitle}</h2>
        <LoadingSpinner />
      </div>
    );
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

// TODO: could the loading if statement be its own component? pass in element to check and title? if valid then render children and if not then show spinner?
