import { combineReducers } from "redux";
import cells from "./cellsReducer";
import regions from "./regionsReducer";
import quests from "./questsReducer";
import auth from "./authReducer";
import maps from "./mapsReducer";

export default combineReducers({
  cells,
  regions,
  quests,
  auth,
  maps,
});
