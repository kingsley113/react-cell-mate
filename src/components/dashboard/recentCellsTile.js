import React, { Component, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import LoadingSpinner from "../general/loadingSpinner";
import RecentCellListItem from "./recentCellListItem";

const RecentCellsTile = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const cells = useSelector((state) => state.cells.allCells);

  const renderRecentCells = () => {
    if (currentUser && cells) {
      const recentCells = currentUser.recent_cells
        ? currentUser.recent_cells.split(",")
        : [];
      const cellItems = recentCells.map((cellId) => {
        const cell = cells.filter((cell) => cell.id === Number(cellId))[0];
        return <RecentCellListItem cell={cell} key={cell.id} />;
      });
      return cellItems;
    } else {
      return <LoadingSpinner />;
    }
  };

  return (
    <div
      className="dashboard-tile details-container margin-top-20"
      id="recent-cells-list"
    >
      <ListGroup variant="flush">
        <h3>Recent Cells</h3>
        {renderRecentCells()}
      </ListGroup>
    </div>
  );
};

export default RecentCellsTile;
