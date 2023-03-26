import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const FlightDataTable = () => {
  const [data, setData] = useState([]);
  const [taxiData, setTaxiData] = useState([]);
  console.log("......1..........");

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.mytaxie.com/v1/flight");
      console.log("...result....", result);
      setData(result.data);
    })();
    (async () => {
      const result = await axios("https://api.mytaxie.com/v1/taxi");
      console.log("...result....", result);
      setTaxiData(result.data);
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
    <>
      <div className="limiter">
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table100">

              <Tabs>
                <TabList>
                  <Tab>Fight Data</Tab>
                  <Tab>Taxi Data</Tab>
                </TabList>

                <TabPanel>
                  <h2>FLight</h2>

                  <table   {...getTableProps()}
                    style={{
                      borderBottom: "solid 3px blue",
                      border: "1px solid black",
                      fontWeight: "bold",
                    }}>
                    <thead>
                      {headerGroups.map((headerGroup) => (
                        <tr className="table100-head" {...headerGroup.getHeaderGroupProps()}>
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
                              return <td className="column1"{...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel>
                  <h2>Taxi Data</h2>
                  <table   {...getTableProps()}
                    style={{
                      borderBottom: "solid 3px blue",
                      border: "1px solid black",
                      fontWeight: "bold",
                    }}>
                    <thead>
                      {headerGroups.map((headerGroup) => (
                        <tr className="table100-head" {...headerGroup.getHeaderGroupProps()}>
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
                              return <td className="column1"{...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </TabPanel>
              </Tabs>



            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default FlightDataTable;
