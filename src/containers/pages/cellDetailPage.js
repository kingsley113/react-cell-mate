import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadCell } from "../../actions/cellActions";
import { loadCurrentUser } from "../../actions/userActions";
import CellDetailsPanel from "../../components/cells/cellDetailsPanel";
import CellTaskPanel from "../../components/cells/cellTask";
import LoadingSpinner from "../../components/general/loadingSpinner";
import QuestTable from "../../components/quests/questTable";

const CellDetailPage = (props) => {
  let pageTitle = "Cell Details";
  const history = useHistory();
  const dispatch = useDispatch();

  if (props.cells) {
    const cell = props.cells.filter((cell) => {
      return cell.slug === props.match.params.slug;
    })[0];
    pageTitle = cell.name;
    document.title = pageTitle;

    // Trigger dispatch in order to record the cell visit on backend
    dispatch(loadCell(cell.id));
    dispatch(loadCurrentUser());

    return (
      <div>
        <h2>{pageTitle}</h2>
        <Button
          size="sm"
          variant="primary"
          onClick={() => history.push(`/cells/${cell.slug}/edit`)}
        >
          EDIT CELL
        </Button>
        <Button
          size="sm"
          variant="primary"
          onClick={() => history.push(`/cells`)}
        >
          BACK TO INDEX
        </Button>

        <div className="details-container">
          <CellDetailsPanel cell={cell} />
          <CellTaskPanel cell={cell} />
        </div>
        <h3>Linked Quests</h3>
        <div>
          <QuestTable quests={cell.quests} />
        </div>
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
};

export default CellDetailPage;
