import React, { Component } from "react";

class CurrentUserPanel extends Component {
  render() {
    if (currentUser) {
      // TODO: create this helper function for current user, provide these two keys in object
      const { displayName, avatarUrl } = currentUser();

      return (
        <Link to="/users/profile" id="current-user-panel">
          {displayName}
          <img src={avatarUrl} alt={`${displayName}'s avatar image`} />
        </Link>
      );
    }
  }
}
