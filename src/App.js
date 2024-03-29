import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Screens/Home';
import Header from './Screens/Header';
import FlightDetails from './Screens/FlightDetails';
import FlightSuccess from './Screens/FlightSuccess';
import FlightDataTable from './Screens/FlightDataTable';
import Landing from './Screens/Landing';
import ContactUs from './Screens/contactUs';
import TaxiSuccess from './Screens/TaxiSuccess';
import TaxiDatatable from './Screens/TaxiDataTable';
import DataTable from "./Screens/DataTable";
import Test from "./Screens/Test"
import './App.css';
import Login from './Screens/Login';
import TaxiModal from './Screens/TaxiModal';
import ProtectedRoutes from './ProtectedRoutes';
import { useState } from 'react';
import QuerySuccess from './Screens/QuerySuccess';
import DriverKyc from './Screens/DriverKyc';
import Footer from './Screens/Footer';

function App() {
  return (
  <>
   <Header/>
  <BrowserRouter>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/taxiSuccess" element={<TaxiSuccess/>}/>
    <Route path="/flight" element={<FlightDetails/>}/>
    <Route path="/flightsuccess" element={<FlightSuccess/>}/>
    <Route path="/test" element={<Test/>}/>
    <Route path="/landing" element={<Landing/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path ="/allTaxi" element={<TaxiDatatable/>}/>
    <Route path="/loginAdmin" element={<Login/>}/>
    <Route path="/modal" element={<TaxiModal/>}/>
    <Route path="/querySuccess" element={<QuerySuccess/>}/>
    <Route element={<ProtectedRoutes/>}>
         <Route path="/all" element={<DataTable/>}/>
    </Route>
    <Route path="/driverkyc" element={<DriverKyc/>}/>
  </Routes>
  </BrowserRouter>
   <Footer/>
  </>
  );
}

export default App;
