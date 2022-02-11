import { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CellTable from "../../components/cells/cellTable";
import LoadingSpinner from "../../components/general/loadingSpinner";

const QuestDetailPage = (props) => {
  let pageTitle = "Quest Detail Page";
  const history = useHistory();

  // useEffect(() => {
  //   document.title = "CellMate Quest";
  // }, []);

  if (props.quests) {
    const quest = props.quests.filter((quest) => {
      return quest.id === Number(props.match.params.id);
    })[0];
    pageTitle = quest.title;

    const renderCellTable = () => {
      if (quest.cells) {
        return <CellTable cells={quest.cells} />;
      } else {
        return <LoadingSpinner />;
      }
    };

    document.title = pageTitle;

    return (
      <div>
        <h2>{pageTitle}</h2>
        <Button
          variant="primary"
          size="sm"
          onClick={() => history.push(`/quests/${quest.id}/edit`)}
        >
          EDIT QUEST
        </Button>
        <Button
          size="sm"
          variant="primary"
          onClick={() => history.push(`/quests`)}
        >
          BACK TO INDEX
        </Button>
        <div className="details-container">
          <ListGroup>
            <ListGroup.Item>
              <span>Title: </span>
              <span>{quest.title}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Summary: </span>
              <span>{quest.summary}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Details: </span>
              <span>{quest.details}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Category: </span>
              <span>{quest.category}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Wiki Link: </span>
              <span>{quest.wiki_link}</span>
            </ListGroup.Item>
          </ListGroup>
        </div>
        {/* <ListGroup.Item> */}
        <div>
          <h4>Linked Cells:</h4>
          {renderCellTable()}
        </div>
        {/* </ListGroup.Item> */}
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

export default QuestDetailPage;
