import { Button } from "react-bootstrap";

const CellMapHeader = () => {
  // need selector for color mode, store this in redux
  // label showing which color mode currently selected
  // for user color mode, show legend of users and thier color
  // title for map
  return (
    <div>
      <Button
        variant="primary"
        className="btn primary active-color"
        id="color-mode-cell"
        onClick={handleColorModeClick("cell")}
      >
        Cell Color
      </Button>
      <Button
        variant="primary"
        className="btn primary"
        id="color-mode-user"
        onClick={handleColorModeClick("user")}
      >
        User Color
      </Button>
      <Button
        variant="primary"
        className="btn primary"
        id="color-mode-progress"
        onClick={handleColorModeClick("progress")}
      >
        Cell Progress
      </Button>
    </div>
  );
};

function handleColorModeClick(mode) {
  // use redux to store the color mode passed in here
  const btnCell = document.getElementById("color-mode-cell");
  const btnUser = document.getElementById("color-mode-user");
  const btnProgress = document.getElementById("color-mode-progress");

  if (mode === "cell") {
  }
}
