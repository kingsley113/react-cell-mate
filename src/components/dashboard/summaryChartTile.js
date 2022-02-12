import React, { Component } from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/general/loadingSpinner";

const SummaryChartTile = () => {
  const cells = useSelector((state) => state.cells.allCells);

  if (cells) {
    const data = prepData(cells);
    return (
      <div
        className="dashboard-tile details-container margin-top-20"
        id="summary-chart-tile"
      >
        <div>
          <h3>Cell Progress Summary</h3>
          <Chart
            chartType="Histogram"
            data={data}
            legendToggle
            options={options}
          />
        </div>
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
};

const prepData = (cells) => {
  let data = [["Name", "Progress"]];
  for (const cell of cells) {
    data.push([cell.name, cell.percent_complete]);
  }

  return data;
};

const options = {
  // title: "Cell Summary by Progress",
  legend: { position: "none" },
  hAxis: { ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
  colors: [
    // "#FF3300",
    // "#ff6600",
    // "#ff9900",
    // "#FFCC00",
    // "#FFFF00",
    // "#ccff00",
    // "#99ff00",
    // "#66ff00",
    // "#33ff00",
    // "#00FF00",
    "#cdb47d",
  ],
  histogram: {
    bucketSize: 10,
  },
  backgroundColor: "none",
  width: "900px",
  height: "400px",
  chartArea: { width: "95%", height: "80%" },
  vAxis: {
    gridlines: { color: "#38352a" },
    minorGridlines: { color: "#38352a" },
    text: { color: "#cdb47d" },
    textStyle: {
      color: "#cdb47d",
    },
    textPosition: "none",
  },
  hAxis: {
    textStyle: {
      color: "#cdb47d",
    },
    title: "Cell % Complete",
  },
};

export default SummaryChartTile;
