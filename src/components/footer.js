import React from 'react';
import "../styles/footer.css";

import MainLogo from "../images/home/Logo Main.png"

import FacebookIcon from '@mui/icons-material/Facebook';
/* 
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
*/ 
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      {/* Top Section */}
      <div className="footerTop">
        <div className='leftSide'> 
          <div className='pageLinks'> 
            <Link to="/about">About</Link>
            <Link to="/credentials">Resources</Link>
            <Link to="/contact">Contact</Link>
          </div> 
        </div> 
        <div className="logo">
          <Link to="/"> 
            <img src={MainLogo} /> 
          </Link> 
        </div>
        <div className="info">
          <h1>Radix Childcare</h1>
          <p>822 Herman Way</p>
          <p>Sykesville, MD, 21784</p>
          <p>(443) 840-8161</p>
          <p> 
            <a href="mailto:support@radixchildcare.com" className="emailLink">
              support@radixchildcare.com
            </a>
          </p> 
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footerBottom">
        <div className="copyright">
          <p>© 2024 Radix Childcare | All Rights Reserved</p>
        </div>
        <div className="socialMedia">
          <a href="https://www.facebook.com/822HermanWay/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
