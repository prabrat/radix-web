import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/home.css"

import background from "../images/home/Background.jpg"

function home() {
  return (
    <div className="home" style={{backgroundImage: `url(${background})` }} >
        <div className="headerContainer"> 
            <h1> Radix Childcare </h1> 
            <Link to ="/contact">
                <button> Contact Us </button>
            </Link>
        </div> 
    </div>
  )
}

export default home
