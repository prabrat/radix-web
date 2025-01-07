import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

// Import Images
import FullLogo from "../images/home/Full Logo.png";
import MenuIcon from '@mui/icons-material/Reorder';

function NavBar() {
    const [openLinks, setOpenLinks] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="navbar">
            <div className={`leftSide ${openLinks ? "open" : "close"}`}>
                <Link to="/">
                    <img src={FullLogo} alt="Radix Childcare" />
                </Link>
                <div className="hiddenLinks">
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                    <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
                    <Link to="/credentials" className={location.pathname === "/credentials" ? "active" : ""}>Credentials</Link>
                    <Link to="/forms" className={location.pathname === "/forms" ? "active" : ""}>Forms</Link>
                    <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
                <Link to="/credentials" className={location.pathname === "/credentials" ? "active" : ""}>Credentials</Link>
                <Link to="/forms" className={location.pathname === "/forms" ? "active" : ""}>Forms</Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
                <button onClick={toggleNavbar}>
                    <MenuIcon />
                </button>
            </div>
        </div>
    );
}

export default NavBar;
