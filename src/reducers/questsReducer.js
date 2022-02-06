function quests(state = { quests: [] }, action) {
  switch (action.type) {
    case "ADD_QUEST":
      // console.log("add quest action: ", action.quest);
      return { allQuests: [...state.allQuests, action.quest] };
    case "LOAD_QUEST":
      return { currentQuest: action.quest };
    case "LOAD_QUESTS":
      return { allQuests: action.quests };
    case "EDIT_QUEST":
      const updatedQuests = state.allQuests.map((quest) => {
        return quest.id === action.quest.id ? action.quest : quest;
      });
      return { ...state, allQuests: updatedQuests };
    case "DELETE_QUEST":
    // TODO:
    default:
      return state;
  }
}

export default quests;
