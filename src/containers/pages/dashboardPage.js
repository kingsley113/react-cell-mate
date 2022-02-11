import React, { Component, useEffect } from "react";
import MapShortcutTile from "../../components/dashboard/mapShortcutTile";
import RecentCellsTile from "../../components/dashboard/recentCellsTile";
import SummaryChartTile from "../../components/dashboard/summaryChartTile";
import { connect } from "react-redux";

const DashboardPage = (props) => {
  useEffect(() => {
    document.title = "CellMate Dashboard";
  }, []);

  return (
    <div>
      <h2 className="margin-top-20">WELCOME TO THE PACIFIC WASTELAND</h2>
      <MapShortcutTile />
      <SummaryChartTile cells={props.cells} />
      <RecentCellsTile recentCells={props.recentCells} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cells: state.cells.allCells,
    recentCells: state.cells.recentCells,
  };
};

export default connect(mapStateToProps)(DashboardPage);
