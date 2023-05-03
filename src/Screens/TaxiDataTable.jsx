import axios from "axios";
import { useTable } from "react-table";
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import "react-tabs/style/react-tabs.css";
import TaxiModal from "./TaxiModal";



const TaxiDatatable = () => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: '600px',
      height: '400px',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [data, setTaxiData] = useState([]);
  const[rowTaxiData, setRowTaxiData] = useState({});

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleClick(cell) {
    setIsOpen(true);
    const fromPlace = cell[0].value;
    const toPlace = cell[1].value;
    const phoneNumber = cell[2].value;
    const dateOfTravel = cell[3].value;
    const carType = cell[4].value;
    const obj = {
      fromPlace, toPlace, phoneNumber, dateOfTravel, carType
    };
    setRowTaxiData(obj);
    console.log('.......1..........', cell);
  }

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
                            <td className="column1" {...cell.getCellProps()}
                            onClick={()=> handleClick(row.cells)}>
                              {cell.render("Cell")}
                            </td>
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
     
     
        <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=""
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Taxi Request details</h2>
       
        <div><b>From:</b> {rowTaxiData.fromPlace}</div>
        <div><b>To:</b> {rowTaxiData.toPlace}</div>
        <div><b>Date of Travel:</b> {rowTaxiData.dateOfTravel}</div>
        <div><b>Phone number:</b> {rowTaxiData.phoneNumber}</div>
        <div><b>Car type:</b> {rowTaxiData.carType}</div>
        <br/>
        <hr/>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div> </div>
    </>
  );
};

export default TaxiDatatable;
