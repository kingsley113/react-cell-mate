function regions(state = { regions: [] }, action) {
  switch (action.type) {
    case "ADD_REGION":
    case "LOAD_REGIONS":
    case "EDIT_REGION":
    case "DELETE_REGION":
    default:
      return state;
  }
}

export default regions;
