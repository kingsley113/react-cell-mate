import React, { useEffect } from "react";
import PageHeader from "./general/pageHeader";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/dashboardPage";
import CellMapPage from "./pages/cellMapPage";
import CellIndexPage from "./pages/cellIndexPage";
import QuestIndexPage from "./pages/questIndexPage";
import UserPage from "./pages/userPage";
import FormPage from "./pages/formPage";
import { useDispatch, useSelector } from "react-redux";
import { loadCells } from "../actions/cellActions";
import CellDetailPage from "./pages/cellDetailPage";
import QuestDetailPage from "./pages/questDetailPage";
import { loadRegions } from "../actions/regionActions";
import { loadWorldspaces } from "../actions/worldspaceActions";
import { loadCurrentUser, loadUsers } from "../actions/userActions";
import { loadQuests } from "../actions/questActions";
import ProtectedRoute from "../components/auth/protectedRoute";
import PageNotFound from "./pages/pageNotFound";
import { loadChunks } from "../actions/chunkActions";
import ChunkDetailPage from "./pages/chunkDetailPage";

const PageContent = (props) => {
  const dispatch = useDispatch();
  const cells = useSelector((state) => state.cells.allCells);
  const chunks = useSelector((state) => state.chunks.allChunks);
  const quests = useSelector((state) => state.quests.allQuests);

  useEffect(() => {
    dispatch(loadCells());
    dispatch(loadRegions());
    dispatch(loadUsers());
    dispatch(loadWorldspaces());
    dispatch(loadQuests());
    dispatch(loadCurrentUser());
    dispatch(loadChunks());
  }, []);

  return (
    <div id="page-content">
      <ProtectedRoute>
        <PageHeader />
        <div id="page-main">
          <Switch>
            {/* Main */}
            <Route exact path="/" render={() => <DashboardPage />} />
            <Route exact path="/map" render={() => <CellMapPage />} />
            {/* Cells */}
            <Route exact path="/cells" render={() => <CellIndexPage />} />
            <Route
              exact
              path="/cells/new"
              render={() => <FormPage formType="new-cell" />}
            />
            <Route
              exact
              path="/cells/:slug"
              render={(routerProps) => (
                <CellDetailPage {...routerProps} cells={cells} />
              )}
            />
            <Route
              exact
              path="/cells/:slug/edit"
              render={(routerProps) => (
                <FormPage
                  formType="edit-cell"
                  data={cells}
                  router={routerProps}
                />
              )}
            />
            {/* Chunks */}
            <Route
              exact
              path="/chunks/:slug"
              render={(routerProps) => (
                <ChunkDetailPage {...routerProps} chunks={chunks} />
              )}
            />
            <Route
              exact
              path="/chunks/:slug/edit"
              render={(routerProps) => (
                <FormPage
                  formType="edit-chunk"
                  data={chunks}
                  router={routerProps}
                />
              )}
            />
            {/* Quests */}
            <Route exact path="/quests" render={() => <QuestIndexPage />} />
            <Route
              exact
              path="/quests/new"
              render={() => <FormPage formType="new-quest" />}
            />
            <Route
              exact
              path="/quests/:slug"
              render={(routerProps) => (
                <QuestDetailPage {...routerProps} quests={quests} />
              )}
            />
            <Route
              exact
              path="/quests/:slug/edit"
              render={(routerProps) => (
                <FormPage
                  formType="edit-quest"
                  data={quests}
                  router={routerProps}
                />
              )}
            />
            {/* User */}
            <Route exact path="/users/profile" render={() => <UserPage />} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </ProtectedRoute>
    </div>
  );
};

export default PageContent;
