import React, { Component } from "react";
import PageHeader from "./general/pageHeader";
import { connect } from "react-redux";

class PageContent extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        page content stuff here
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
