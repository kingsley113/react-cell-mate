import React, { Component } from "react";
import MapShortcutTile from "../../components/dashboard/mapShortcutTile";
import RecentCellsTile from "../../components/dashboard/recentCellsTile";
import SummaryChartTile from "../../components/dashboard/summaryChartTile";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        Dashboard Page
        <SummaryChartTile />
        <MapShortcutTile />
        <RecentCellsTile />
      </div>
    );
  }
}

export default DashboardPage;
