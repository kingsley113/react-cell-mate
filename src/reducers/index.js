import { combineReducers } from "redux";
import cells from "./cellsReducer";
import regions from "./regionsReducer";
import quests from "./questsReducer";
import auth from "./authReducer";
import maps from "./mapsReducer";
import worldspaces from "./worldspacesReducer";
import users from "./usersReducer";
import redirects from "./redirectReducer";
import chunks from "./chunksReducer";

export default combineReducers({
  cells,
  regions,
  quests,
  auth,
  maps,
  worldspaces,
  users,
  redirects,
  chunks,
});
