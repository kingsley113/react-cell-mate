import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadQuest } from "../../actions/questActions";
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
    return (
      <div>
        quest detail page
        <h2>{quest.title}</h2>
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
