import React, { Component } from "react";
import CellDetailsPanel from "../../components/cells/cellDetailsPanel";
import CellTaskPanel from "../../components/cells/cellTask";

const CellDetailPage = (props) => {
  if (props.cells) {
    const cell = props.cells.filter((cell) => {
      return cell.id === Number(props.match.params.id);
    })[0];

    return (
      <div>
        <h1>{cell.name}</h1>
        <CellDetailsPanel cell={cell} />
        <CellTaskPanel tasks={cell.tasks} />
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
