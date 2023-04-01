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
import DataTable from "./Screens/DataTable"
import './App.css';
// import "bootstrap/scss/bootstrap.scss";
// import './assests/TaxiPark_files/font-awesome.css';
// import './assests/TaxiPark_files/swiper.css';
// import './assests/TaxiPark_files/swipebox.css';
// import './assests/TaxiPark_files/zoomslider.css';
// import './assests/TaxiPark_files/style.css';
// import './assests/TaxiPark_files/jquery-ui.css';

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
    <Route path="/all" element={<DataTable/>}/>
    <Route path="/landing" element={<Landing/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path ="/allTaxi" element={<TaxiDatatable/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
