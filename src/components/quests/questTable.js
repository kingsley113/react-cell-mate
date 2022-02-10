import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { Link, Redirect, useHistory } from "react-router-dom";
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

const QuestTable = ({ quests }) => {
  const data = React.useMemo(() => prepareData(quests), []);

  // Navigate to cell page on row click
  let history = useHistory();
  const handleRowClick = (id) => {
    const path = `/quests/${id}`;
    history.push(path);
  };

  // Table Columns
  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "col1",
      },
      {
        Header: "Category",
        accessor: "col2",
      },
      {
        Header: "Link",
        accessor: "col3",
      },
      {
        Header: "",
        accessor: "col4",
      },
      {
        Header: "ID",
        accessor: "col5",
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
          {/* {rows.map((row) => { */}
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (cell.column.Header === "Title") {
                    return (
                      <td
                        {...cell.getCellProps()}
                        // TODO: figure out how to get the actual quest id and not row...
                        onClick={() => handleRowClick(row.original.id)}
                      >
                        {cell.render("Cell")}{" "}
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
        <span className="padded-left padded-right">| Go to page: </span>{" "}
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
          value={pageSize}
          className="input-width-200"
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
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} quests...`}
      />
    </span>
  );
}

// Open Wiki link in new tab
const openNewTab = (link) => {
  window.open(link, "_blank");
};

const prepareData = (questArray) => {
  let preppedData = [];

  for (const quest of questArray) {
    preppedData.push({
      id: quest.id,
      col1: quest.title,
      col2: quest.category,
      col3:
        quest.wiki_link !== "" ? (
          <Button size="sm" onClick={() => openNewTab(quest.wiki_link)}>
            Wiki Link
          </Button>
        ) : null,
      col4: <Link to={`/quests/${quest.id}/edit`}>Edit</Link>,
      col5: quest.id,
    });
  }
  return preppedData;
};

export default QuestTable;

/* 
columns:
title
quest type
wiki link
edit

*/
// TODO: find better symbol for up and down sort arrows
// TODO: get real id of each quest and not the table row id
