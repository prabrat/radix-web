import React from 'react';
import "../styles/footer.css";

import MainLogo from "../images/home/Logo Main.png";
import MarylandAccredidation from "../images/home/MDA.png"

import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      {/* Top Section */}
      <div className="footerTop">
        {/* Logo on the left */}
        <div className="footerLogo">
          <img src={MainLogo} alt="Radix Childcare Logo" />
        </div>

        {/* Items aligned to the right */}
        <div className="footerContent">
          <div className='MDA'>
            <img src={MarylandAccredidation} /> 
          </div>
          <div className="footerColumn">
            <h2>Parent Resources</h2>
            <Link to="/about/curriculum">Our Curriculum</Link>
            <Link to="/forms">Forms & Policies</Link>
            <Link to="/forms/expense-statement">Expense Statement</Link>
          </div>

          <div className="footerColumn">
            <h2>Company</h2>
            <Link to="/about">About Us</Link>
          </div>

          <div className="footerColumn">
            <h2>Location</h2>
            <p>822 Herman Way</p>
            <p>Sykesville, MD 21784</p>
            <p>Phone: (667) 802-9169</p>
            <p>
              <a href="mailto:bhavnajain7804@yahoo.com" className="emailLink">
                Mrs. Bhavna: bhavnajain7804@yahoo.com
              </a>
              <a href="mailto:support@radixchildcare.com" className="emailLink">
                support@radixchildcare.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footerBottom">
        <div className="copyright">
          <p>© 2024 Radix Childcare. All Rights Reserved</p>
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
