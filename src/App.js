import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Screens/Home';
import Header from './Screens/Header';
import FlightDetails from './Screens/FlightDetails';
import FlightDataTable from './Screens/FlightDataTable';

function App() {
  return (
  <>
   <Header/>
  <BrowserRouter>

  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/flight" element={<FlightDetails/>}/>
    <Route path="/all" element={<FlightDataTable/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
