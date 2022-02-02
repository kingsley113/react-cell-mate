import React, { Component } from "react";
import CellDetailsPanel from "../../components/cells/cellDetailsPanel";

const CellDetailPage = (props) => {
  // console.log(props.match.params.id);
  if (props.cells) {
    const cell = props.cells.filter((cell) => {
      // console.log(cell.id);
      return cell.id === Number(props.match.params.id);
    })[0];
    console.log(cell);

    return (
      <div>
        <h1>{cell.name}</h1>
        <CellDetailsPanel cell={cell} />
      </div>
    );
    // TODO: cell details panel
    // TODO: cell todo panel
    // TODO: cell comments
    // TODO: cell quests list
    // TODO: edit button
    // TODO: return to index button
    // TODO: url should be slug of title
  } else {
  }
  return <h2>Loading...</h2>;
};

export default CellDetailPage;
