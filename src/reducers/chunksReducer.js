function chunks(state = { chunks: [] }, action) {
  switch (action.type) {
    case "ADD_CHUNK":
      return { allChunks: [...state.allChunks, action.chunk] };
    case "LOAD_CHUNKS":
      return { allChunks: action.chunks };
    case "EDIT_CHUNK":
      const updatedChunks = state.allChunks.map((chunk) => {
        return chunk.id === action.chunk.id ? action.chunk : chunk;
      });
      return { ...state, allChunks: updatedChunks };
    default:
      return state;
  }
}

export default chunks;
