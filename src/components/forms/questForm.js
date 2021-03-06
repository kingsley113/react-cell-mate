import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createQuest, editQuest } from "../../actions/questActions";
import QuestCellsTable from "../quests/questCellsTable";
import LoadingSpinner from "../../components/general/loadingSpinner";

class QuestForm extends Component {
  state = {
    formTitle: "New Quest",
    noLinkedCells: false,
    title: "",
    summary: "",
    details: "",
    wiki_link: "",
    category: "Main",
    cell_ids: [],
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    if (this.props.mode === "edit") {
      this.loadQuestData(this.props.quest);
      this.setState({ formTitle: "Edit Quest" });
    }
  }

  loadQuestData = (quest) => {
    this.setState({
      id: quest.id,
      title: quest.title,
      summary: quest.summary,
      details: quest.details,
      wiki_link: quest.wiki_link,
      category: quest.category,
      cell_ids: quest.cell_ids,
    });
    if (quest.cell_ids.length === 0) this.setState({ noLinkedCells: true });
  };

  renderCellTable = () => {
    if (this.props.allCells) {
      if (
        this.state.cell_ids.length > 0 ||
        this.state.noLinkedCells === true ||
        this.props.mode === "new"
      ) {
        return (
          <QuestCellsTable
            cells={this.props.allCells}
            cellIds={this.state.cell_ids}
            setCellIds={this.recieveCellIds}
          />
        );
      }
    } else {
      return <LoadingSpinner />;
    }
  };

  recieveCellIds = (ids) => {
    this.setState(() =>
      ids.length === 0 ? { noLinkedCells: true } : { noLinkedCells: false }
    );
    this.setState({ cell_ids: ids });
  };

  render() {
    return (
      <div>
        <h2>{this.state.formTitle}</h2>
        <Form onSubmit={this.handleOnSubmit}>
          {/* title */}
          <Form.Group className="mb-3" controlId="formQuestTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter quest title"
              value={this.state.title}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* summary */}
          <Form.Group className="mb-3" controlId="formQuestSummary">
            <Form.Label>Summary</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter quest summary"
              name="summary"
              value={this.state.summary}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* details */}
          {/* TODO: set the size for this */}
          <Form.Group className="mb-3" controlId="formQuestDetails">
            <Form.Label>Details</Form.Label>
            <Form.Control
              // type="textarea"
              placeholder="Enter quest details"
              as="textarea"
              name="details"
              value={this.state.details}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* category */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Quest Category"
              name="category"
              value={this.state.category}
              onChange={this.handleOnChange}
            >
              <option value="Prologue Quests">Prologue Quests</option>
              <option value="Main Quests">Main Quests</option>
              <option value="Republic of Cascadia Questline">
                Republic of Cascadia Questline
              </option>
              <option value="Red Leaf Questline">Red Leaf Questline</option>
              <option value="Ramsay Questline">Ramsay Questline</option>
              <option value="Side Quests">Side Quests</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

          {/* wiki link */}
          <Form.Group className="mb-3" controlId="formQuestWikiLink">
            <Form.Label>Wiki Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter quest wiki url"
              name="wiki_link"
              value={this.state.wiki_link}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {this.renderCellTable()}

          {/* submit & cancel button */}
          <Button variant="primary" type="submit">
            Save Quest
          </Button>
          <Button variant="danger" onClick={() => window.history.back()}>
            Cancel
          </Button>
        </Form>
      </div>
    );
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    if (this.props.mode === "new") {
      this.props.createQuest(this.state);
    } else {
      this.props.editQuest(this.state);
    }
  };
}

const mapStateToProps = (state) => {
  return {
    allCells: state.cells.allCells,
    activeQuest: state.quests.activeQuest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createQuest: (quest) => dispatch(createQuest(quest)),
    editQuest: (quest) => dispatch(editQuest(quest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestForm);
