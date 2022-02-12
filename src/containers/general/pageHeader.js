import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../../components/header/logo";
import CurrentUserPanel from "../../components/header/userInfo";

class PageHeader extends Component {
  render() {
    return (
      <div id="page-header">
        <Navbar variant="dark">
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/map">Cell Map</Nav.Link>
            <Nav.Link href="/cells">Cell List</Nav.Link>
            <Nav.Link href="/quests">Quests</Nav.Link>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <CurrentUserPanel />
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default PageHeader;
