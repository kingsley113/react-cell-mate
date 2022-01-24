import React, { Component } from "react";
import MapShortcutTile from "../../components/dashboard/mapShortcutTile";
import RecentCellsTile from "../../components/dashboard/recentCellsTile";
import SummaryChartTile from "../../components/dashboard/summaryChartTile";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        Dashboard Page
        <SummaryChartTile cells={this.props.cells} />
        <MapShortcutTile />
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
