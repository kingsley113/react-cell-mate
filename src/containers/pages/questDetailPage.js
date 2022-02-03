import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadQuest } from "../../actions/questActions";
import CellTable from "../../components/cells/cellTable";
import LoadingSpinner from "../../components/general/loadingSpinner";
import QuestTable from "../../components/quests/questTable";

const QuestDetailPage = (routerProps) => {
  const questId = routerProps.match.params.id;
  console.log(questId);
  const quest = useSelector((state) => state.quests.currentQuest);
  const pageTitle = "Quest Detail Page";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadQuest(questId));
  }, []);

  if (quest) {
    console.log(quest);
    return (
      <div>
        quest detail page
        <h2>{quest.title}</h2>
        <ListGroup>
          <ListGroup.Item>Title: {quest.title}</ListGroup.Item>
          <ListGroup.Item>Summary: {quest.summary}</ListGroup.Item>
          <ListGroup.Item>Details: {quest.details}</ListGroup.Item>
          <ListGroup.Item>Category: {quest.category}</ListGroup.Item>
          <ListGroup.Item>Wiki Link: {quest.wiki_link}</ListGroup.Item>
          <ListGroup.Item>
            <h4>Linked Cells:</h4>
            <CellTable cells={quest.cells} />
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

// TODO: decide best way to handle loading single quests, probably just load the single quest from backend?
