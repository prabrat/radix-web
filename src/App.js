import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

/* Componenets */ 
import Navbar from "./components/navbar"
import Footer from "./components/footer"

/* Pages */ 
import Home from "./pages/home"
import Creds from "./pages/creds"
import About from "./pages/about"
import Contact from "./pages/contact"
import Curriculum from "./pages/curriculum"
import Forms from "./pages/forms"
import ExpenseStatement from "./pages/expense-statement"

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
          <Route path="/about/curriculum" exact Component={Curriculum}/>  
          <Route path="/forms" exact Component={Forms}/> 
          <Route path="/forms/expense-statement" exact Component={ExpenseStatement}/>
        </Routes>
        <Footer /> 
      </Router> 
    </div>
  );
}

export default App;
