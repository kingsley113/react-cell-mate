import { Button, ListGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CellTable from "../../components/cells/cellTable";
import LoadingSpinner from "../../components/general/loadingSpinner";

const QuestDetailPage = (props) => {
  let pageTitle = "Quest Detail Page";
  const history = useHistory();

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

    return (
      <div>
        <h2>{pageTitle}</h2>
        <Button
          variant="primary"
          onClick={() => history.push(`/quests/${quest.id}/edit`)}
        >
          Edit Quest
        </Button>
        <ListGroup>
          <ListGroup.Item>Title: {quest.title}</ListGroup.Item>
          <ListGroup.Item>Summary: {quest.summary}</ListGroup.Item>
          <ListGroup.Item>Details: {quest.details}</ListGroup.Item>
          <ListGroup.Item>Category: {quest.category}</ListGroup.Item>
          <ListGroup.Item>Wiki Link: {quest.wiki_link}</ListGroup.Item>
          <ListGroup.Item>
            <h4>Linked Cells:</h4>
            {renderCellTable()}
          </ListGroup.Item>
        </ListGroup>
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
