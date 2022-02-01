import React, { useEffect } from "react";
import {
  useAsyncDebounce,
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
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

const CellTable = (props) => {
  // TODO: this data will need to connect to redux cells

  console.log(props.cells);
  // const data = React.useMemo(
  //   () => [
  //     {
  //       col1: "Hello",
  //       col2: "World",
  //     },
  //     {
  //       col1: "react-table",
  //       col2: "is cool!",
  //     },
  //     {
  //       col1: "this is",
  //       col6: "another row",
  //     },
  //   ],
  //   []
  // );
  // let data;
  // useEffect(() => {
  const data = React.useMemo(() => prepareData(props.cells), []);
  // });

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
        Header: "% Complete",
        accessor: "col3",
      },
      {
        Header: "Open Tasks",
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
    ],
    []
  );

  // const defaultColumn = React.useMemo(
  //   () => ({
  //     Filter: DefaultColumnFilter,
  //   }),
  //   []
  // );

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 25 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // if (data) {
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
    state,
    state: { pageIndex, pageSize },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = tableInstance;

  return (
    <>
      <table {...getTableProps()}>
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
          {/* {rows.map((row) => { */}
          {page.map((row, i) => {
            prepareRow(row);
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
      </table>
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
  // } else {
  //   return <h2>Loading...</h2>;
  // }
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
      col1: cell.color,
      col2: cell.name,
      col3: cell.percent_complete,
      // col4:
      col5: cell.priority,
      col6: cell.ck_coordinate_x,
      col7: cell.ck_coordinate_y,
      col8: cell.user_id,
      col9: cell.region_id,
      col10: cell.worldspace_id,
    });
  }
  return preppedData;
};

export default CellTable;

/* 
TODO: columns:
color
title
% complete
# of open tasks
priority
x coordinate
y coordinate
user
region
worldspace

**This cell list component should be generic enough to reuse for other areas, pass in cells as prop**
*/
// TODO: find better symbol for up and down sort arrows
// TODO: set default number of cells to show = 20
// TODO: set up user, region, and worlspace to show name instead of id
// TODO: add opnen tasks to backend serializer
