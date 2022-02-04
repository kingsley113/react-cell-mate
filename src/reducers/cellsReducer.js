function cells(state = { cells: [] }, action) {
  switch (action.type) {
    // add cases here for manipulating cell states
    case "ADD_CELL":
      return { allCells: [...state.allCells, action.cell] };
    case "LOAD_CELLS":
      return { allCells: action.cells };
    case "EDIT_CELL":
      const updatedCells = state.allCells.map((cell) => {
        return cell.id === action.cell.id ? action.cell : cell;
      });
      return { ...state, allCells: updatedCells };
    case "DELETE_CELL":
    case "SET_ACTIVE_CELL":
    case "RESET_ACTIVE_CELL":
    default:
      return state;
  }
}

export default cells;
