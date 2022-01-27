function quests(state = { quests: [] }, action) {
  switch (action.type) {
    case "ADD_QUEST":
    case "LOAD_QUESTS":
    case "EDIT_QUEST":
    case "DELETE_QUEST":
    default:
      return state;
  }
}

export default quests;
