import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import Logo from "../../components/header/logo";

class PageHeader extends Component {
  render() {
    return (
      <div id="page-header">
        <Navbar bg="dark" variant="dark">
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
              Signed in as: <a href="/user">Vault Boy</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default PageHeader;
