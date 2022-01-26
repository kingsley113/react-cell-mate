import React, { Component } from "react";
import { Link } from "reract-router-dom";

// Props should be text and link strings
class NavIcon extends Component {
  render() {
    return (
      <Link to={this.props.link} className="nav-icon">
        <div>{this.props.text}</div>;
      </Link>
    );
  }
}

export default NavIcon;
