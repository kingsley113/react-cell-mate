import React, { Component } from "react";
import CellTable from "../../components/cells/cellTable";

class CellIndexPage extends Component {
  render() {
    return (
      <div>
        the list of cells
        <CellTable />
      </div>
      // TODO: lets use reactTable for this one
      // TODO: filter box
      // TODO: sort list by columns
      // TODO: new cell button
    );
  }
}

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
