// import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// TODO:Import pages here and add to router below
//TODO: LoginPage Component
//TODO: NewUserPage Component
//TODO: PageContent Component
import PageContent from "./containers/pageContent";
import PageNotFound from "./containers/pages/pageNotFound";
import LoginPage from "./containers/pages/loginPage";
import NewUserPage from "./containers/pages/newUserPage";
import CallbackPage from "./containers/pages/callbackPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/auth/accepted"
              render={(routerProps) => <CallbackPage {...routerProps} />}
            />
            <Route exact path="/login" component={LoginPage} />
            Component
            <Route exact path="/signup" component={NewUserPage} />
            <Route path="/" component={PageContent} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
