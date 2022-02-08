import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadCell } from "../../actions/cellActions";
import CellDetailsPanel from "../../components/cells/cellDetailsPanel";
import CellTaskPanel from "../../components/cells/cellTask";
import LoadingSpinner from "../../components/general/loadingSpinner";
import QuestTable from "../../components/quests/questTable";

const CellDetailPage = (props) => {
  let pageTitle = "Cell Details";
  const history = useHistory();
  const dispatch = useDispatch();

  // Trigger dispatch in order to record the cell visit on backend
  dispatch(loadCell(props.match.params.id));

  if (props.cells) {
    const cell = props.cells.filter((cell) => {
      return cell.id === Number(props.match.params.id);
    })[0];
    pageTitle = cell.name;

    return (
      <div>
        <h1>{cell.name}</h1>
        <Button
          variant="primary"
          onClick={() => history.push(`/cells/${cell.id}/edit`)}
        >
          Edit Cell
        </Button>
        <Button variant="secondary" onClick={() => history.push(`/cells`)}>
          Back to Index
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
    // TODO: url should be slug of title
  } else {
    return (
      <div>
        <h1>{pageTitle}</h1>
        <LoadingSpinner />
      </div>
    );
  }
};

export default CellDetailPage;
