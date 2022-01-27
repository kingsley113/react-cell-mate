import React, { Component } from "react";
import PageHeader from "./general/pageHeader";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/dashboardPage";
import CellMapPage from "./pages/cellMapPage";
import CellIndexPage from "./pages/cellIndexPage";
import QuestIndexPage from "./pages/questIndexPage";
import UserPage from "./pages/userPage";

class PageContent extends Component {
  render() {
    return (
      <div>
        <div>
          <PageHeader />
          page content stuff here
        </div>
        <div className="page-main">
          <Switch>
            <Route exact path="/" render={() => <DashboardPage />} />
            <Route exact path="/map" render={() => <CellMapPage />} />
            <Route exact path="/cells" render={() => <CellIndexPage />} />
            <Route exact path="/quests" render={() => <QuestIndexPage />} />
            <Route exact path="/user" render={() => <UserPage />} />
          </Switch>
        </div>
      </div>
    );
  }
}

// TODO:
// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.users,
//   };
// };

// export default connect(mapStateToProps)(PageContent);
export default PageContent;
