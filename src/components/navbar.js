import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css";

// Import Images
import FullLogo from "../images/home/Full Logo.png";
import MenuIcon from '@mui/icons-material/Reorder';

function NavBar() {
    const [openLinks, setOpenLinks] = useState(false);
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
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/credentials">Credentials</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/credentials">Credentials</Link>
                <Link to="/contact">Contact Us</Link>
                <button onClick={toggleNavbar}>
                    <MenuIcon />
                </button>
            </div>
        </div>
    );
}

export default NavBar;
