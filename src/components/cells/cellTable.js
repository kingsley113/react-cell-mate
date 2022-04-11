import React from "react";
import { Button, Form } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { Link, useHistory } from "react-router-dom";
import {
  useAsyncDebounce,
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";

const CellTable = (props) => {
  const data = React.useMemo(() => prepareData(props.cells), []);

  // Navigate to cell page on row click
  let history = useHistory();

  const handleRowClick = (id) => {
    const path = `/cells/${id}`;
    history.push(path);
  };

  // Table Columns
  const columns = React.useMemo(
    () => [
      {
        Header: "Color",
        accessor: "col1",
      },
      {
        Header: "Title",
        accessor: "col2",
      },
      {
        Header: "%",
        accessor: "col3",
      },
      {
        Header: "Tasks",
        accessor: "col4",
      },
      {
        Header: "Priority",
        accessor: "col5",
      },
      {
        Header: "X",
        accessor: "col6",
      },
      {
        Header: "Y",
        accessor: "col7",
      },
      {
        Header: "Assigned User",
        accessor: "col8",
      },
      {
        Header: "Region",
        accessor: "col9",
      },
      {
        Header: "Worldspace",
        accessor: "col10",
      },
      {
        Header: "Modified",
        accessor: "col11",
      },
      {
        Header: "",
        accessor: "col12",
      },
    ],
    []
  );

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 25 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    state: { pageIndex, pageSize },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = tableInstance;
  return (
    <>
      <BTable
        striped
        bordered
        hover
        variant="dark"
        size="sm"
        {...getTableProps()}
      >
        {/* Table Head */}
        <thead>
          <tr>
            <th colSpan={visibleColumns.length} style={{ textAlign: "left" }}>
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Table Body */}
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (cell.column.Header === "Color") {
                    return (
                      <td
                        {...cell.getCellProps()}
                        onClick={() => handleRowClick(row.original.slug)}
                      >
                        <div
                          style={{ backgroundColor: `${row.original.col1}` }}
                          className="table-color-box"
                        ></div>
                      </td>
                    );
                  } else if (cell.column.Header !== "") {
                    return (
                      <td
                        {...cell.getCellProps()}
                        onClick={() => {
                          handleRowClick(row.original.slug);
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>

      {/* // Pagination */}
      <div className="pagination">
        <Button
          variant="primary"
          size="sm"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </Button>{" "}
        <Button
          variant="primary"
          size="sm"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </Button>{" "}
        <Button
          variant="primary"
          size="sm"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </Button>{" "}
        <Button
          variant="primary"
          size="sm"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </Button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="padded-left padded-right"> | Go to page: </span>
        <Form.Select
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: "100px" }}
        />{" "}
        <Form.Select
          className="input-width-200"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[25, 50, 100, 99999].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize} cells
            </option>
          ))}
        </Form.Select>
      </div>
    </>
  );
};

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="flex-horizontal input-width-500">
      Search:{" "}
      <Form.Control
        type="text"
        // <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} cells...`}
      />
    </span>
  );
}

const prepareData = (cellArray) => {
  let preppedData = [];

  for (const cell of cellArray) {
    let dataObj = {
      id: cell.id,
      slug: cell.slug,
      col1: cell.color,
      col2: cell.name,
      col3: cell.percent_complete,
      col4: cell.tasks.filter((task) => task.complete === false).length,
      col5: cell.priority,
      col6: cell.ck_coordinate_x,
      col7: cell.ck_coordinate_y,
      col8: cell.user ? cell.user.display_name : "",
      col9: cell.region ? cell.region.name : "",
      col10: cell.worldspace.name,
      col11: cell.updated_at.slice(0, 10),
      col12: <Link to={`/cells/${cell.slug}/edit`}>Edit</Link>,
    };

    preppedData.push(dataObj);
  }
  return preppedData;
};

export default CellTable;

// TODO: find better symbol for up and down sort arrows
