import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const MapShortcutTile = () => {
  const history = useHistory();
  return (
    <div className="dashboard-tile" id="map-shortcut-tile">
      <Button size="lg" variant="primary" onClick={() => history.push(`/map`)}>
        CELL MAP
      </Button>
      <Button
        size="lg"
        variant="primary"
        onClick={() => history.push(`/cells`)}
      >
        CELL INDEX
      </Button>
      <Button
        size="lg"
        variant="primary"
        onClick={() => history.push(`/cells/new`)}
      >
        NEW CELL
      </Button>
    </div>
  );
};

export default MapShortcutTile;
