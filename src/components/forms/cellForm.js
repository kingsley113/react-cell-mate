import React, { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { createCell, editCell } from "../../actions/cellActions";
import randomColorGenerator from "../../helpers/randomColorGenerator";

class CellForm extends Component {
  state = {
    formTitle: "New Cell",
    name: "",
    description: "",
    priority: "Low",
    ck_coordinate_x: 0,
    ck_coordinate_y: 0,
    user_id: 1,
    region_id: 1,
    worldspace_id: 1,
    percent_complete: 0,
    create_default_tasks: true,
    color: "#555555",
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    if (this.props.mode === "edit") {
      this.loadCellData(this.props.cell);
      this.setState({ formTitle: "Edit Cell" });
    }

    if (this.props.mode === "new") {
      this.setState({ color: randomColorGenerator() });
    }
  }

  loadCellData = (cell) => {
    this.setState({
      id: cell.id,
      name: cell.name,
      description: cell.description,
      priority: cell.priority,
      ck_coordinate_x: cell.ck_coordinate_x,
      ck_coordinate_y: cell.ck_coordinate_y,
      user_id: cell.user.id,
      region_id: cell.region.id,
      worldspace_id: cell.worldspace.id,
      percent_complete: cell.percent_complete,
      // color: "#555555",
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    if (this.props.mode === "new") {
      this.props.createCell(this.state);
    } else {
      this.props.editCell(this.state);
    }
  };

  renderOptionItems = (data) => {
    let items = [];
    if (data) {
      for (const item of data) {
        items.push(
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        );
      }
    }
    return items;
  };

  renderUserOptionItems = (data) => {
    let items = [];
    items.push(
      <option value="" key={0}>
        None
      </option>
    );
    if (data) {
      for (const item of data) {
        items.push(
          <option value={item.id} key={item.id}>
            {item.display_name}
          </option>
        );
      }
    }
    return items;
  };
  // TODO: improve these two render item methods, DRY

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

          {/* coordinate x */}
          <div className="flex-horizontal">
            <Form.Group
              className="mb-3 col-25 padded-right"
              controlId="formCellCoordX"
            >
              <Form.Label>CK Coordinate X</Form.Label>
              <Form.Control
                type="number"
                name="ck_coordinate_x"
                value={this.state.ck_coordinate_x}
                onChange={this.handleOnChange}
              />
            </Form.Group>

            {/* coordinate y */}
            <Form.Group
              className="mb-3 col-25 padded-right padded-left"
              controlId="formCellCoordY"
            >
              <Form.Label>CK Coordinate Y</Form.Label>
              <Form.Control
                type="number"
                name="ck_coordinate_y"
                value={this.state.ck_coordinate_y}
                onChange={this.handleOnChange}
              />
            </Form.Group>

            {/* priority */}
            <Form.Group
              className="mb-3 col-25 padded-right padded-left"
              controlId="formCellPriority"
            >
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

            {/* color */}
            <Form.Group
              className="mb-3 col-25 padded-left"
              controlId="formCellColor"
              id="cell-form-color-input"
            >
              <Form.Label>Cell Display Color</Form.Label>
              <Form.Control
                type="color"
                title="Select a cell display color"
                name="color"
                value={this.state.color}
                onChange={this.handleOnChange}
              />
            </Form.Group>
          </div>

          {/* user */}
          <Form.Group className="mb-3" controlId="formCellUser">
            <Form.Label>Assigned User</Form.Label>
            <Form.Select
              aria-label="Cell User"
              name="user_id"
              value={this.state.user_id}
              onChange={this.handleOnChange}
            >
              {this.renderUserOptionItems(this.props.allUsers)}
            </Form.Select>
          </Form.Group>

          {/* region */}
          <Form.Group className="mb-3" controlId="formCellRegion">
            <Form.Label>Region</Form.Label>
            <Form.Select
              aria-label="Cell Region"
              name="region_id"
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
              name="worldspace_id"
              value={this.state.worldspace_id}
              onChange={this.handleOnChange}
            >
              {this.renderOptionItems(this.props.allWorldspaces)}
            </Form.Select>
          </Form.Group>

          {/* % complete */}

          <Form.Group className="mb-3" controlId="formCellProgress">
            <Form.Label>Progress</Form.Label>
            <InputGroup className="mb-3">
              <div className="flex-horizontal">
                <InputGroup.Text id="basic-addon-1">
                  {this.state.percent_complete}%
                </InputGroup.Text>
                <Form.Range
                  name="percent_complete"
                  value={this.state.percent_complete}
                  onChange={this.handleOnChange}
                  aria-describedby="basic-addon-1"
                />
              </div>
            </InputGroup>
          </Form.Group>

          {/* create cell submit button */}
          <Button variant="primary" type="submit">
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
    allUsers: state.users.allUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCell: (cell) => dispatch(createCell(cell)),
    editCell: (cell) => dispatch(editCell(cell)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CellForm);
