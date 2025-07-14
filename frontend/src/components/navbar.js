import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import FullLogo from "../images/home/Full Logo.png";
import MenuIcon from '@mui/icons-material/Reorder';

function NavBar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => { setMenuOpen(false); };
  
    return (
      <div className="navbar">
        <div className="leftSide">
          <Link to="/">
            <img src={FullLogo} alt="Radix Childcare" />
          </Link>
        </div>
  
        <div className={`rightSide ${menuOpen ? 'open' : 'close'}`}>

          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <div className="dropdown">
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
            <div className="dropdown-content">
              <Link to='/about/curriculum'>Our Curriculum</Link>
            </div>
          </div>
          <Link to="/credentials" className={location.pathname === "/credentials" ? "active" : ""}>Credentials</Link>
          <div className='dropdown'>
            <Link to="/forms" className={location.pathname === "/forms" ? "active" : ""}>Forms</Link>
            <div className='dropdown-content'>
              <Link to="/forms/expense-statement">Expense Statement</Link>
            </div>
          </div>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
  
          <div className="hiddenLinks">
            <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>Home</Link>
            <div className="dropdown">
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={closeMenu}>About Us</Link>
              <div className="dropdown-content">
                <Link to="/about/curriculum" onClick={closeMenu}>Our Curriculum</Link>
              </div>
            </div>
            <Link to="/credentials" className={location.pathname === "/credentials" ? "active" : ""} onClick={closeMenu}>Credentials</Link>
            <div className='dropdown'>
              <Link to="/forms" className={location.pathname === "/forms" ? "active" : ""} onClick={closeMenu}>Forms</Link>
              <div className='dropdown-content'>
                <Link to="/forms/expense-statement" onClick={closeMenu}>Expense Statement</Link>
              </div>
            </div>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={closeMenu}>Contact Us</Link>
          </div>
  
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon />
          </button>
        </div>
      </div>
    );
  }  

export default NavBar;
