function regions(state = { regions: [] }, action) {
  switch (action.type) {
    case "ADD_REGION":
    case "LOAD_REGIONS":
      return { allRegions: action.regions };
    default:
      return state;
  }
}

export default regions;
