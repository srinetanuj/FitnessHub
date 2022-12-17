import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/LoginPage";


import { AllRoutes } from "./Pages/AllRoutes";
import Footer from "./Pages/DatasPage/Footer";
import SignupCard from "./Components/Login/SignupPage";

function App() {
  return (
    <div className="App">

      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
