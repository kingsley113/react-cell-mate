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

const PageContent = (props) => {
  const dispatch = useDispatch();
  const cells = useSelector((state) => state.cells.allCells);

  useEffect(() => {
    dispatch(loadCells());
    // load usernames
  }, []);

  return (
    <div>
      <PageHeader />
      <div className="page-main">
        <Switch>
          {/* Main */}
          <Route exact path="/" render={() => <DashboardPage />} />
          <Route exact path="/map" render={() => <CellMapPage />} />
          {/* Cells */}
          <Route exact path="/cells" render={() => <CellIndexPage />} />
          <Route
            exact
            path="/cells/new"
            render={() => <FormPage form="new-cell" />}
          />
          <Route
            path="/cells/:id"
            render={(routerProps) => (
              <CellDetailPage {...routerProps} cells={cells} />
            )}
          />
          {/* Quests */}
          <Route exact path="/quests" render={() => <QuestIndexPage />} />
          <Route
            exact
            path="/quests/new"
            render={() => <FormPage form="new-quest" />}
          />
          <Route
            path="/quests/:id"
            render={(routerProps) => <QuestDetailPage {...routerProps} />}
          />
          {/* User */}
          <Route exact path="/user" render={() => <UserPage />} />
        </Switch>
      </div>
    </div>
  );
};

export default PageContent;

// TODO:
// protected routes
// redirect to home if already logged in
