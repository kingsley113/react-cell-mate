import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadQuests } from "../../actions/questActions";
import LoadingSpinner from "../../components/general/loadingSpinner";
import QuestTable from "../../components/quests/questTable";

const QuestIndexPage = () => {
  const dispatch = useDispatch();
  const quests = useSelector((state) => state.quests.allQuests);

  useEffect(() => {
    dispatch(loadQuests());
  }, []);

  if (quests) {
    return (
      <div>
        quests page content
        <QuestTable quests={quests} />
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
};

export default QuestIndexPage;

// TODO: load quests
