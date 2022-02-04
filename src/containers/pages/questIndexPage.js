import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/";
import { loadQuests } from "../../actions/questActions";
import LoadingSpinner from "../../components/general/loadingSpinner";
import QuestTable from "../../components/quests/questTable";

const QuestIndexPage = () => {
  const dispatch = useDispatch();
  const quests = useSelector((state) => state.quests.allQuests);
  const pageTitle = "Quest Index";
  const history = useHistory();

  useEffect(() => {
    dispatch(loadQuests());
  }, []);

  if (quests) {
    return (
      <div>
        <h2>{pageTitle}</h2>
        <Button variant="primary" onClick={() => history.push("/quests/new")}>
          New Quest
        </Button>
        <QuestTable quests={quests} />
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

export default QuestIndexPage;

// TODO: load quests
