import { Button, ListGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CellTable from "../../components/cells/cellTable";
import LoadingSpinner from "../../components/general/loadingSpinner";

const QuestDetailPage = (props) => {
  let pageTitle = "Quest Detail Page";
  const history = useHistory();

  if (props.quests) {
    const quest = props.quests.filter((quest) => {
      return quest.slug === props.match.params.slug;
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

    const handleOnClick = (url) => {
      window.open(url, "_blank");
    };
    return (
      <div>
        <h2>{pageTitle}</h2>
        <Button
          variant="primary"
          size="sm"
          onClick={() => history.push(`/quests/${quest.slug}/edit`)}
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
              <span onClick={() => handleOnClick(quest.wiki_link)}>
                {quest.wiki_link}
              </span>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div>
          <h3>Linked Cells:</h3>
          {renderCellTable()}
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

export default QuestDetailPage;
