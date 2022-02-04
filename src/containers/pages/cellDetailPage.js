import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CellDetailsPanel from "../../components/cells/cellDetailsPanel";
import CellTaskPanel from "../../components/cells/cellTask";
import QuestTable from "../../components/quests/questTable";

const CellDetailPage = (props) => {
  const history = useHistory();

  if (props.cells) {
    const cell = props.cells.filter((cell) => {
      return cell.id === Number(props.match.params.id);
    })[0];

    return (
      <div>
        <h1>{cell.name}</h1>
        <Button
          variant="primary"
          onClick={() => history.push(`/cells/${cell.id}/edit`)}
        >
          Edit Cell
        </Button>
        <div className="cell-details-container">
          <CellDetailsPanel cell={cell} />
          <CellTaskPanel cell={cell} />
        </div>
        <div>
          <QuestTable quests={cell.quests} />
        </div>
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
