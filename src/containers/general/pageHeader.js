import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Logo from "../../components/header/logo";
import CurrentUserPanel from "../../components/header/userInfo";

const PageHeader = () => {
  const history = useHistory();

  return (
    <div id="page-header">
      <Navbar variant="dark">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <div>
          <span className="nav-icon" onClick={() => history.push("/")}>
            Home
          </span>
          <span className="nav-icon" onClick={() => history.push("/map")}>
            Cell Map
          </span>
          <span className="nav-icon" onClick={() => history.push("/cells")}>
            Cell List
          </span>
          <span className="nav-icon" onClick={() => history.push("/quests")}>
            Quests
          </span>
        </div>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <CurrentUserPanel />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default PageHeader;
