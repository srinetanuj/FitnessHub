import './App.css';
import Navbar from './Components/Navbar/Navbar';

import { AllRoutes } from './Pages/AllRoutes';
import Footer from './Pages/DatasPage/Footer';
import Home from './Components/Home/Home';



function App() {
  return (

    <div className="App">

     <Navbar/>
     <AllRoutes/>
    
    <Home/> 
     <Footer/>
    </div>

  );
}

export default App;
