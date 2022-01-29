import React, { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import randomColorGenerator from "../../helpers/randomColorGenerator";

class CellForm extends Component {
  state = {
    formTitle: "New Cell",
    name: "",
    description: "",
    priority: "Low",
    coordinateX: 0,
    coordinateY: 0,
    user: "",
    region: "",
    worldspace: "",
    progress: 0,
    createDefaultTasks: true,
    color: "#555555",
  };

  handleOnChange = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    if (this.props.cell) {
      this.loadCellData(this.props.cell);
      this.setState({ formTitle: "Edit Cell" });
    }

    if (this.props.mode === "new") {
      this.setState({ color: randomColorGenerator() });
    }
  }

  loadCellData = (cell) => {
    for (let key in this.state.keys) {
      this.setState({ [key]: cell.key });
    }
    // TODO: ***make sure that our saved redux keys match this form state keys
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    // TODO: use redux action prop to create cell or edit cell
  };

  render() {
    return (
      <div>
        <h2>{this.state.formTitle}</h2>
        <Form onSubmit={this.handleOnSubmit}>
          {/* name */}
          <Form.Group className="mb-3" controlId="formCellName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter cell name"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
          </Form.Group>
          {/* description */}
          <Form.Group className="mb-3" controlId="formCellDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter cell description"
              name="description"
              value={this.state.description}
              onChange={this.handleOnChange}
            />
          </Form.Group>
          {/* priority */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              aria-label="Cell Priority"
              name="priority"
              value={this.state.priority}
              onChange={this.handleOnChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </Form.Select>
          </Form.Group>
          {/* coordinate x */}
          <Form.Group className="mb-3" controlId="formCellCoordX">
            <Form.Label>CK Coordinate X</Form.Label>
            <Form.Control
              type="number"
              name="coordinateX"
              value={this.state.coordinateX}
              onChange={this.handleOnChange}
            />
          </Form.Group>
          {/* coordinate y */}
          <Form.Group className="mb-3" controlId="formCellCoordY">
            <Form.Label>CK Coordinate Y</Form.Label>
            <Form.Control
              type="number"
              name="coordinateY"
              value={this.state.coordinateY}
              onChange={this.handleOnChange}
            />
          </Form.Group>
          {/* user */}
          {/* TODO: use this to map all users */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              aria-label="Cell Priority"
              name="user"
              value={this.state.user}
              onChange={this.handleOnChange}
            >
              <option value="1">This will</option>
              <option value="2">Be a</option>
              <option value="3">list of all</option>
              <option value="4">users eventually</option>
            </Form.Select>
          </Form.Group>
          {/* region */}
          {/* TODO: use this to map through regions, need ability to enter new one */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Region</Form.Label>
            <Form.Select
              aria-label="Cell Priority"
              name="region"
              value={this.state.region}
              onChange={this.handleOnChange}
            >
              <option value="low">This will</option>
              <option value="medium">Be a list</option>
              <option value="high">of all regions</option>
              <option value="critical">eventually</option>
            </Form.Select>
          </Form.Group>
          {/* worldspace */}
          <Form.Group className="mb-3" controlId="formCellWorldspace">
            <Form.Label>Worldspace</Form.Label>
            <Form.Select
              aria-label="Cell Worldspace"
              name="worldspace"
              value={this.state.worldspace}
              onChange={this.handleOnChange}
            >
              <option value="pacificWasteland">Pacific Wasteland</option>
              <option value="interior">Interior</option>
              <option value="beargrass">Beargrass</option>
              <option value="cascade">Cascade</option>
              <option value="pikePlace">Pike Place</option>
            </Form.Select>
          </Form.Group>
          {/* % complete */}
          <Form.Group className="mb-3" controlId="formCellProgress">
            <Form.Label>Progress</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon-1">
                {this.state.progress}%
              </InputGroup.Text>
              <Form.Range
                name="progress"
                value={this.state.progress}
                onChange={this.handleOnChange}
                aria-describedby="basic-addon-1"
              />
            </InputGroup>
          </Form.Group>
          {/* create default tasks? */}
          <Form.Group className="mb-3" controlId="formCellDefaultTasks">
            <Form.Label>Create Default Tasks?</Form.Label>
            <Form.Check
              type="checkbox"
              name="createDefaultTasks"
              value={this.state.createDefaultTasks}
              onChange={this.handleOnChange}
            />
          </Form.Group>
          {/* color - make this random */}
          <Form.Group className="mb-3" controlId="formCellColor">
            <Form.Label>Cell Display Color</Form.Label>
            <Form.Control
              type="color"
              title="Select a cell display color"
              name="color"
              value={this.state.color}
              onChange={this.handleOnChange}
            />
            {/* <Form.Text muted>Cell map display color</Form.Text> */}
          </Form.Group>
          {/* create cell submit button */}
          <Button variant="success" type="submit">
            Save Cell
          </Button>
          <Button variant="danger" onClick={() => window.history.back()}>
            Cancel
          </Button>
        </Form>
      </div>
    );
  }
}

export default CellForm;

// TODO: build out form with bootstrap
