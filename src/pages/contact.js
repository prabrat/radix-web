import React from 'react'
import ContactImage from '../images/about/about.jpg'
import "../styles/contact.css"
function contact() {
  return (
    <div className='contact'>
        <div 
            className='leftSide' 
            style={{ backgroundImage: `url(${ContactImage})` }}
            ></div>
        <div className='rightSide'>

            <h1> Contact Us </h1>
            <form id="contact-form" method="POST"> 
                <label htmlFor="name"> Full Name </label> 
                <input name="name" placeholder="Enter Full Name" required/> 

                <label htmlFor="email"> Email </label> 
                <input name="email" placeholder="Enter Email Address" required/> 

                <label htmlFor="phone"> Phone Number </label> 
                <input name="phone" placeholder="Enter Phone Number" required/> 

                <label htmlFor="message"> Message </label> 
                <textarea rows="6" placeholder="Type here" name="message" required> </textarea>

                <button type="submit"> Submit </button>
            </form>
        </div>
      
    </div>
  )
}

export default contact
