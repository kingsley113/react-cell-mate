import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { Link, Redirect, useHistory } from "react-router-dom";
import {
  useAsyncDebounce,
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
  useRowSelect,
} from "react-table";

// TODO: reference this for styles when the time comes
// const Styles = styled.div`
//   padding: 1rem;

//   table {
//     border-spacing: 0;
//     border: 1px solid black;

//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }

//   .pagination {
//     padding: 0.5rem;
//   }
// `;

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

// *****************MAIN FUNCTION*******************
const QuestCellsTable = (props) => {
  const data = React.useMemo(() => prepareData(props.cells), []);
  console.log(props);
  const preSelectedRows = React.useMemo(
    () => prepareSelectedRows(props.cellIds, data),
    []
  );

  // Table Columns
  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "col1",
      },
      {
        Header: "Region",
        accessor: "col2",
      },
      {
        Header: "Worldspace",
        accessor: "col3",
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 25,
        selectedRowIds: preSelectedRows,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
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
    selectedFlatRows,
    state,
    state: { pageIndex, pageSize, selectedRowIds },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = tableInstance;

  React.useEffect(() => {
    const ids = [];
    for (const row of selectedFlatRows) {
      ids.push(String(row.original.id));
    }
    props.setCellIds(ids);
  }, [selectedFlatRows]);

  // React.useEffect(() => {
  //   selectedRowIds = props.cellIds;
  // }, []);

  return (
    <>
      <BTable striped bordered hover size="sm" {...getTableProps()}>
        {/* Table Head */}
        {console.log("table props: ", getTableProps())}
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
          {/* {rows.map((row) => { */}
          {page.map((row, i) => {
            prepareRow(row);
            // console.log(preSelectedRows);
            // row.toggleRowSelected(true);
            // console.log(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>

      {/* // Pagination */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
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
        </select>
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
    <span>
      Search:{" "}
      <input
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
    preppedData.push({
      id: cell.id,
      col1: cell.name,
      col2: cell.region.name,
      col3: cell.worldspace.name,
    });
  }
  return preppedData;
};

const prepareSelectedRows = (idArray) => {
  let selectedRows = {};

  for (const id of idArray) {
    selectedRows[id] = true;
  }

  console.log("id object: ", selectedRows);
  return selectedRows;
};

export default QuestCellsTable;

// TODO: find better symbol for up and down sort arrows
