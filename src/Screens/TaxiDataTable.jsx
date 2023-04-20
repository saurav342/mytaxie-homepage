import axios from "axios";
import { useTable } from "react-table";
import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import TaxiModal from "./TaxiModal";



const TaxiDatatable = () => {
  // let ariaHideApp={true};
  let subtitle;
  const [data, setTaxiData] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   subtitle.style.color = "#f00";
  // }



  useEffect(() => {
    (async () => {
      const result = await axios("https://api.mytaxie.com/v1/taxi");
      result.data.forEach(eachData=>{
        eachData.extraKey = "";
      })
      setTaxiData(result.data);
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
            Header: "Type of Car",
            accessor: "typeOfCar",
          },
          {
            Header: "Action",
            accessor: "extraKey",
          },
        ],
      },
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
                    <tr
                      className="table100-head"
                      {...headerGroup.getHeaderGroupProps()}
                    >
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
                          return (
                            <>
                              <td className="column1" {...cell.getCellProps()}>
                                {cell.render("Cell")}
                              </td>
                            </>
                          );
                        })}
                        {/* <td className="column1">
                          <button onClick={openModal}>Open Modal</button>
                          <TaxiModal 
                          modalData = {row}
                          isOpen={modalIsOpen}
                           />
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxiDatatable;
