import logo from './logo.svg';
import './App.css';
import  Navbar  from './Components/Navbar';
import { AllRoutes } from './Routes/RoutesFIle';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
