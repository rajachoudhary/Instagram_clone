


import  Navbar  from './Components/Navbar';
import { AllRoutes } from './Routes/RoutesFIle';



import { Home } from './Components/Pages/Home';


import RouteItem from './Routes/RouteItem';



function App() {
  return (
    <div className="App">

      {/* <Navbar/> */}
      <AllRoutes/>


      <Home/>    

      <RouteItem/>   


    </div>
  );
}

export default App;
