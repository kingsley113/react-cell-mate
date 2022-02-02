function quests(state = { quests: [] }, action) {
  switch (action.type) {
    case "ADD_QUEST":
    // TODO:
    case "LOAD_QUEST":
      return { currentQuest: action.quest };
    case "LOAD_QUESTS":
      return { allQuests: action.quests };
    case "EDIT_QUEST":
    // TODO:
    case "DELETE_QUEST":
    // TODO:
    default:
      return state;
  }
}

export default quests;
