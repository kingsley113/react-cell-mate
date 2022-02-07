import React, { Component } from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";

const SummaryChartTile = () => {
  const cells = useSelector((state) => state.cells.allCells);
  return (
    <div className="dashboard-tile" id="summary-chart-tile">
      {/* TODO: Chart tile here */}
      <Chart
        chartType="Histogram"
        data={"TODO:"}
        width="200px"
        height="200px"
        legendToggle
      />
    </div>
  );
};

export default SummaryChartTile;
