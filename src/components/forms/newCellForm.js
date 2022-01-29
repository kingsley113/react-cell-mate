import React, { Component } from "react";
import { Form } from "react-bootstrap";

class NewCellForm extends Component {
  state = {
    name: "",
    description: "",
    priority: "Low",
    coordinateX: 0,
    coordinateY: 0,
    user: "",
    region: "",
    percComplete: 0,
    createDefaultTasks: true,
    color: "TODO: random color generator",
  };

  hanleOnChange(event) {
    this.setState({ [event.target]: event.target.value });
    // TODO: check this function
  }

  render() {
    return (
      <div>
        this is the new cell form, build away!
        <Form>
          {/* name */}
          <Form.Group className="mb-3" controlId="formCellName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter cell name" />
          </Form.Group>
          {/* description */}
          <Form.Group className="mb-3" controlId="formCellDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter cell description" />
          </Form.Group>
          {/* priority */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Name</Form.Label>
            <Form.Select aria-label="Cell Priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </Form.Select>
          </Form.Group>
          {/* coordinate x */}
          <Form.Group className="mb-3" controlId="formCellCoordX">
            <Form.Label>CK Coordinate X</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          {/* coordinate y */}
          <Form.Group className="mb-3" controlId="formCellCoordY">
            <Form.Label>CK Coordinate Y</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          {/* user */}
          {/* TODO: use this to map all users */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Select aria-label="Cell Priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </Form.Select>
          </Form.Group>
          {/* region */}
          {/* TODO: use this to map through regions, need ability to enter new one */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Region</Form.Label>
            <Form.Select aria-label="Cell Priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </Form.Select>
          </Form.Group>
          {/* worldspace */}
          <Form.Group className="mb-3" controlId="formCellWorldspace">
            <Form.Label>Worldspace</Form.Label>
            <Form.Select aria-label="Cell Worldspace">
              <option value="pacificWasteland">Pacific Wasteland</option>
              <option value="interior">Interior</option>
              <option value="beargrass">Beargrass</option>
              <option value="cascade">Cascade</option>
              <option value="pikePlace">Pike Place</option>
            </Form.Select>
          </Form.Group>
          {/* % complete */}
          {/* <Form.Group className="mb-3" controlId="formCellProgress">
            <Form.Label>Progress (% complete)</Form.Label>
            <Form.Control type="number" />
          </Form.Group> */}
          {/* TODO: display the current % complete */}
          <Form.Group className="mb-3" controlId="formCellProgress">
            <Form.Label>Progress</Form.Label>
            <Form.Range defaultValue="0" />
          </Form.Group>
          {/* create default tasks? */}
          <Form.Group className="mb-3" controlId="formCellDefaultTasks">
            <Form.Label>Create Default Tasks?</Form.Label>
            <Form.Check type="checkbox" />
          </Form.Group>
          {/* interior? */}
          <Form.Group className="mb-3" controlId="formCellInterior">
            <Form.Label>Interior?</Form.Label>
            <Form.Check type="checkbox" />
          </Form.Group>

          {/* color - make this random */}
          <Form.Group className="mb-3" controlId="formCellColor">
            <Form.Label>Display Color</Form.Label>
            <Form.Control
              type="color"
              defaultValue="#555555"
              title="Select a cell display color"
            />
            <Form.Text muted>Cell map display color</Form.Text>
          </Form.Group>
          {/* create cell submit button */}
          {/* cancel - use window.back */}
        </Form>
      </div>
    );
    // TODO: build out form with bootstrap
  }
}

export default NewCellForm;

// TODO: make form controlled
// TODO: add on change function
// TODO: add submit and cancel buttons
