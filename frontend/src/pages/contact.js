import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import ContactImage from '../images/contact/contact.jpg';
import ContactTitle from '../images/contact/contact-title.png';
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!captchaVerified) {
      alert('Please verify that you are not a robot');
      return;
    }

    try {

      const response = await fetch("https://radix-web.onrender.com/contact", { 
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(formData)
      }); 

      const data = await response.json(); 

      if (response.ok) { 
        alert(data.message);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setCaptchaVerified(false);
        recaptchaRef.current.reset();
      } else { 
        alert(data.Error || 'Error submitting the form. Please try again.')
      }     
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className='contact'>
      <div className='contact-top'> 
        <img src={ContactTitle} alt="Contact Us" /> 
      </div>
      <div className='contact-bottom'>
        <div 
          className='leftSide' 
          style={{ backgroundImage: `url(${ContactImage})` }}
        ></div>
        <div className='rightSide'>
          <form id="contact-form" onSubmit={handleSubmit}> 
            <label htmlFor="name">Full Name</label> 
            <input 
              name="name" 
              placeholder="Enter Full Name" 
              required
              value={formData.name}
              onChange={handleInputChange}
            /> 

            <label htmlFor="email">Email</label> 
            <input 
              name="email" 
              type="email"
              placeholder="Enter Email Address" 
              required
              value={formData.email}
              onChange={handleInputChange}
            /> 

            <label htmlFor="phone">Phone Number</label> 
            <input 
              name="phone" 
              placeholder="Enter Phone Number" 
              required
              value={formData.phone}
              onChange={handleInputChange}
            /> 

            <label htmlFor="message">Message</label> 
            <textarea 
              rows="6" 
              placeholder="Type here" 
              name="message" 
              required
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>

            <div className="recaptcha-container">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LeT3n8rAAAAAKbLZI_H2AzT6Zk87-qQ1MJrAcCn" /* Need to add my key after connecting domaian */
                onChange={handleCaptchaChange}
              />
            </div>

            <button 
              type="submit" 
              disabled={!captchaVerified}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;