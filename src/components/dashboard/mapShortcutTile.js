import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const MapShortcutTile = () => {
  const history = useHistory();
  return (
    <div className="dashboard-tile" id="map-shortcut-tile">
      <Button variant="primary" onClick={() => history.push(`/map`)}>
        Cell Map
      </Button>
      <Button variant="primary" onClick={() => history.push(`/cells`)}>
        Cell Index
      </Button>
      <Button variant="primary" onClick={() => history.push(`/cells/new`)}>
        New Cell
      </Button>
    </div>
  );
};

export default MapShortcutTile;
