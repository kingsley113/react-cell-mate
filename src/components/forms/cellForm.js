import React, { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import randomColorGenerator from "../../helpers/randomColorGenerator";

class CellForm extends Component {
  state = {
    formTitle: "New Cell",
    name: "",
    description: "",
    priority: "Low",
    ck_coordinate_x: 0,
    ck_coordinate_y: 0,
    user: "",
    region: "",
    worldspace: "",
    progress: 0,
    createDefaultTasks: true,
    color: "#555555",
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    // console.log(this.props.cell);
    if (this.props.cell) {
      this.loadCellData(this.props.cell);
      this.setState({ formTitle: "Edit Cell" });
    }

    if (this.props.mode === "new") {
      this.setState({ color: randomColorGenerator() });
    }
  }

  loadCellData = (cell) => {
    this.setState({
      name: cell.name,
      description: cell.description,
      priority: cell.priority,
      ck_coordinate_x: cell.ck_coordinate_x,
      ck_coordinate_y: cell.ck_coordinate_y,
      user_id: cell.user.id,
      region_id: cell.region.id,
      worldspace_id: cell.worldspace.id,
      progress: cell.percent_complete,
      // color: "#555555",
    });
    // TODO: ***make sure that our saved redux keys match this form state keys
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    // TODO: use redux action prop to create cell or edit cell
  };

  renderOptionItems = (data) => {
    let items = [];
    for (const item of data) {
      items.push(
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      );
    }
    return items;
  };

  // TODO: render worldspaces
  // TODO: render users

  render() {
    console.log(this.state);
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
              value={this.state.ck_coordinate_x}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* coordinate y */}
          <Form.Group className="mb-3" controlId="formCellCoordY">
            <Form.Label>CK Coordinate Y</Form.Label>
            <Form.Control
              type="number"
              name="coordinateY"
              value={this.state.ck_coordinate_y}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* user */}
          {/* TODO: use this to map all users */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Assigned User</Form.Label>
            <Form.Select
              aria-label="Cell User"
              name="user"
              value={this.state.user.display_name}
              onChange={this.handleOnChange}
            >
              <option value="1">This will</option>
              <option value="2">Be a</option>
              <option value="3">list of all</option>
              <option value="4">users eventually</option>
              {/* TODO: import all of the usernames */}
            </Form.Select>
          </Form.Group>

          {/* region */}
          {/* TODO: use this to map through regions, need ability to enter new one */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Region</Form.Label>
            <Form.Select
              aria-label="Cell Priority"
              name="region"
              value={this.state.region_id}
              onChange={this.handleOnChange}
            >
              {this.renderOptionItems(this.props.allRegions)}
            </Form.Select>
          </Form.Group>

          {/* worldspace */}
          <Form.Group className="mb-3" controlId="formCellWorldspace">
            <Form.Label>Worldspace</Form.Label>
            <Form.Select
              aria-label="Cell Worldspace"
              name="worldspace"
              value={this.state.worldspace.name}
              onChange={this.handleOnChange}
            >
              {this.renderOptionItems(this.props.allWorldspaces)}
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
          {/* TODO: hide this if form is in edit mode */}
          <Form.Group className="mb-3" controlId="formCellDefaultTasks">
            <Form.Label>Create Default Tasks?</Form.Label>
            <Form.Check
              type="checkbox"
              name="createDefaultTasks"
              value={this.state.createDefaultTasks}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* color */}
          <Form.Group className="mb-3" controlId="formCellColor">
            <Form.Label>Cell Display Color</Form.Label>
            <Form.Control
              type="color"
              title="Select a cell display color"
              name="color"
              value={this.state.color}
              onChange={this.handleOnChange}
            />
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

const mapStateToProps = (state) => {
  return {
    allRegions: state.regions.allRegions,
    allWorldspaces: state.worldspaces.allWorldspaces,
  };
};

export default connect(mapStateToProps)(CellForm);

// TODO: build out form with bootstrap
