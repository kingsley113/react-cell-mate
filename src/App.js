// import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import { BrowerRouter as Router, Route, Switch } from "react-router-dom";
// TODO:Import pages here and add to router below
//TODO: LoginPage Component
//TODO: NewUserPage Component
//TODO: PageContent Component
//TODO: PageNotFound Component

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" /> //TODO: Page Component
            <Route exact path="/signup" /> //TODO: Page Component
            <Route path="/" component={PageContent} /> //TODO: Page Component
            <Route component={PageNotFound} /> //TODO: Page Component
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
