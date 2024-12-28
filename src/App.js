import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./pages/home"
import Creds from "./pages/creds"
import About from "./pages/about"
import Contact from "./pages/contact"

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar /> 
        <Routes> 
          <Route path="/" exact Component={Home}/> 
          <Route path="/credentials" exact Component={Creds}/> 
          <Route path="/about" exact Component={About}/> 
          <Route path="/contact" exact Component={Contact}/> 
        </Routes>
        <Footer /> 
      </Router> 
    </div>
  );
}

export default App;
