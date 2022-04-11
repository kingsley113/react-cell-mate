import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CellTable from "../../components/cells/cellTable";
import ChunkDetailsPanel from "../../components/chunks/chunkDetailsPanel";
import LoadingSpinner from "../../components/general/loadingSpinner";

const ChunkDetailPage = (props) => {
  let pageTitle = "Chunk Details";
  const history = useHistory();

  if (props.chunks) {
    const chunk = props.chunks.find((chunk) => {
      return chunk.slug === props.match.params.slug;
    });
    pageTitle = chunk.name;
    document.title = pageTitle;

    const renderCellTable = () => {
      if (chunk.cells) {
        return <CellTable cells={chunk.cells} />;
      } else {
        return <LoadingSpinner />;
      }
    };

    return (
      <div>
        <h2>{pageTitle}</h2>
        <Button
          size="sm"
          variant="primary"
          onClick={() => history.push(`/chunks/${chunk.slug}/edit`)}
        >
          EDIT CHUNK
        </Button>
        <Button
          size="sm"
          variant="primary"
          onClick={() => history.push(`/map`)}
        >
          BACK TO MAP
        </Button>

        <div className="details-container">
          <ChunkDetailsPanel chunk={chunk} />
        </div>
        <div>
          <h3>Linked Cells:</h3>
          <p>
            Note: cells are automatically linked after assigning chunk to user
          </p>
          {renderCellTable()}
        </div>
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

export default ChunkDetailPage;
