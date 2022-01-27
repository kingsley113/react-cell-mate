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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" /> //TODO: login Component
            <Route exact path="/signup" /> //TODO: signup Component
            <Route path="/" component={PageContent} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
