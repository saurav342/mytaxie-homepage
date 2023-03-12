import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Screens/Home';
import Header from './Screens/Header';
import FlightDetails from './Screens/FlightDetails';
import FlightDataTable from './Screens/FlightDataTable';
import Landing from './Screens/Landing';

function App() {
  return (
  <>
   <Header/>
  <BrowserRouter>

  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/flight" element={<FlightDetails/>}/>
    <Route path="/all" element={<FlightDataTable/>}/>
    <Route path="/landing" element={<Landing/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
