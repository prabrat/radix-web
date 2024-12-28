import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../styles/navbar.css"

// Import Iamges 
import MainLogo from "../images/home/Logo Main.png"
import FullLogo from "../images/home/Full Logo.png"
import MenuIcon from '@mui/icons-material/Reorder'

function NavBar() {

    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => { 
        setOpenLinks(!openLinks) 
    }
  return (
    <div className='navbar'>

        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <Link to="/"> 
                <img src={FullLogo} /> 
            </Link> 
            <div className="hiddenLinks"> 
                <Link to="/"> Home </Link> 
                <Link to="/about"> About </Link> 
                <Link to="/credentials"> Credentials </Link> 
                <Link to="/contact"> Contact </Link> 
            </div>
        </div> 
        <div className="rightSide">
            <Link to="/"> Home </Link> 
            <Link to="/about"> About </Link> 
            <Link to="/credentials"> Credentials </Link> 
            <Link to="/contact"> Contact </Link> 
            <button onClick={toggleNavbar}> 
                <MenuIcon /> 
            </button> 
        </div>
      
    </div>
  )
}

export default NavBar
