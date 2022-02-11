import React, { useEffect } from "react";
import MapShortcutTile from "../../components/dashboard/mapShortcutTile";
import RecentCellsTile from "../../components/dashboard/recentCellsTile";
import SummaryChartTile from "../../components/dashboard/summaryChartTile";

const DashboardPage = (props) => {
  useEffect(() => {
    document.title = "CellMate Dashboard";
  }, []);

  return (
    <div>
      <h2 className="margin-top-20">WELCOME TO THE PACIFIC WASTELAND</h2>
      <MapShortcutTile />
      <SummaryChartTile />
      <RecentCellsTile />
    </div>
  );
};

export default DashboardPage;
