import React, { Component, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CellTable from "../../components/cells/cellTable";
import LoadingSpinner from "../../components/general/loadingSpinner";

const CellIndexPage = () => {
  const allCells = useSelector((state) => state.cells.allCells);
  const pageTitle = "Cell Index";
  const history = useHistory();

  useEffect(() => {
    document.title = "Cell Index";
  }, []);

  if (allCells) {
    return (
      <div>
        <div className="index-page-header">
          <h2>{pageTitle}</h2>
          <div>
            <Button
              size="sm"
              variant="primary"
              onClick={() => history.push("/cells/new")}
            >
              New Cell
            </Button>
          </div>
        </div>
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
