import React, { Component, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import RecentCellListItem from "./recentCellListItem";

const RecentCellsTile = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const cells = useSelector((state) => state.cells.allCells);

  const renderRecentCells = () => {
    if (currentUser && cells) {
      const recentCells = currentUser.recent_cells.split(",");
      const cellItems = recentCells.map((cellId) => {
        const cell = cells.filter((cell) => cell.id === Number(cellId))[0];
        return <RecentCellListItem cell={cell} key={cell.id} />;
      });
      return cellItems;
    }
  };
  return (
    <div className="dashboard-tile" id="recent-cells-list">
      <ListGroup>{renderRecentCells()}</ListGroup>
    </div>
  );
};

export default RecentCellsTile;
