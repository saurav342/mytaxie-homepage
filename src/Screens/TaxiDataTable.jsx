import axios from "axios";
import { useTable } from "react-table";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TaxiDatatable = () =>{

    const [taxiData, setTaxiData] = useState([]);

    useEffect(()=>{
        (async()=>{
            const result = await axios("https://api.mytaxie.com/v1/taxi");
            console.log(".............taxiData................",result);
            setTaxiData(result.taxiData)
        })();
    },[]);

    useEffect(() => {
        (async () => {
          const result = await axios("https://api.mytaxie.com/v1/taxi");
          console.log("...result....", result);
          setTaxiData(result.taxiData)
        })();
      }, []);
    const columns = React.useMemo(
        () => [
          {
            Header: "Taxi Request Info",
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
              {
                Header:"Type of Car",
                accessor: "typeOfCar",
            },
            ],
          }
        ],
        []
      );
    
      const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, taxiData });
    return(
        <>
        {/* <div className="limiter">
        <div className="container-table100">
        <div className="wrap-table100">
        <div className="table100">
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
        </div>
        </div>
        </div>
        </div> */}

         <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
            </>
    );
}

export default TaxiDatatable