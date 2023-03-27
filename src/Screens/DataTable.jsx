import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FlightDataTableOne from "./FlightDataTable";
import TaxiDatatable from "./TaxiDataTable";


function DataTable (){
    return(
        <>
    

              <Tabs>
                <TabList>
                  <Tab>Fight Data</Tab>
                  <Tab>Taxi Data</Tab>
                </TabList>

                <TabPanel>
                  <h2>FLight</h2>
                 {/* <FlightDataTableOne/> */}
                 <FlightDataTableOne/>
                </TabPanel>
                <TabPanel>
                  <h2>Taxi Data</h2>
                  <TaxiDatatable/>
                </TabPanel>
              </Tabs>


        </>
    )
}


export default DataTable;