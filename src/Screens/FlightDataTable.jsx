import React, { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import axios from "axios";

const FlightDataTable = () => {
  const [data, setData] = useState([]);
  console.log("......1..........");

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.mytaxie.com/v1/flight");
      console.log("...result....", result);
      setData(result.data.results);
    })();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Flight Request Info",
        columns: [
          {
            Header: "From ",
            accessor: "from",
          },
          {
            Header: "To",
            accessor: "to",
          },
          {
            Header: "Phone Number",
            accessor: "phoneNumber",
          },
          {
            Header: "Date",
            accessor: "date",
          },
        ],
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table 
    {...getTableProps()} 
    style={{
      borderBottom: "solid 3px blue",
      border: "1px solid black",
      fontWeight: "bold",
    }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px blue",
                  background: "green",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default FlightDataTable;
