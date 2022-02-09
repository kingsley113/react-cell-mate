import React, { Component } from "react";
import MapShortcutTile from "../../components/dashboard/mapShortcutTile";
import RecentCellsTile from "../../components/dashboard/recentCellsTile";
import SummaryChartTile from "../../components/dashboard/summaryChartTile";
import { connect } from "react-redux";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <h2>WELCOME TO THE PACIFIC WASTELAND</h2>
        <MapShortcutTile />
        <SummaryChartTile cells={this.props.cells} />
        <RecentCellsTile recentCells={this.props.recentCells} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cells: state.cells.allCells,
    recentCells: state.cells.recentCells,
  };
};

export default connect(mapStateToProps)(DashboardPage);
