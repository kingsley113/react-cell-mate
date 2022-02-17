import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CellTable from "../../components/cells/cellTable";
import LoadingSpinner from "../../components/general/loadingSpinner";

const CellIndexPage = () => {
  const allCells = useSelector((state) => state.cells.allCells);
  const pageTitle = "Cell Index";
  const history = useHistory();

  useEffect(() => {
    document.title = "Cell Index";
  }, []);

  if (allCells) {
    return (
      <div>
        <div className="index-page-header">
          <h2>{pageTitle}</h2>
          <div>
            <Button
              size="sm"
              variant="primary"
              onClick={() => history.push("/cells/new")}
            >
              New Cell
            </Button>
          </div>
        </div>
        <CellTable cells={allCells} />
      </div>
    );
  } else {
    return (
      <div>
        <h2>{pageTitle}</h2>
        <LoadingSpinner />
      </div>
    );
  }
};

export default CellIndexPage;
