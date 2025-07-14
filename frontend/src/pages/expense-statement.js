import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import "../styles/expense-statement.css";
import expense from "../images/forms/expense.png"
import { formControlClasses } from "@mui/material";

function ExpenseStatement() {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Handle reCAPTCHA verification
  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!captchaVerified) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    const formData = {
      'child-name': event.target['child-name'].value,
      'parent-name': event.target['parent-name'].value,
      'phone': event.target['phone'].value,
      'email': event.target['email'].value,
      'from-date': event.target['from-date'].value,
      'to-date': event.target['to-date'].value,
      'message': event.target['message'].value,
    };

    try { 
      const response = await fetch("https://radix-web.onrender.com/submit-expense", { 
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(formData)
      }); 

      const data = await response.json(); 

      if (response.ok) { 
        alert(data.message); 
        event.target.reset(); 
        setCaptchaVerified(false);
      } else { 
        alert(data.error || 'An error occured while submitting. Please try again!'); 
      }

    } catch(error) { 
      console.error('Error:', error); 
      alert('There was an error sending your request. Please try again!');
    }
  };

  return (
    <div className="expense">
      {/* Top Section with Logo */}
      <div className="expenseTop">
        <img src={expense} />
      </div>

      {/* Information Section */}
      <div className="expenseInfo">
        <p>
          Enter the information below and click on <strong>SUBMIT</strong> to
          request an Expense Statement. This request will be sent to you via
          email within 5 business days.
        </p>
        <p className="expenseNote">
          *Year End requests will be sent via email once they are available at
          the end of January.
        </p>
      </div>

      {/* Form Section */}
      <form id="expense-request" className="expenseForm" onSubmit={handleSubmit}>
        <h2>Expense Statement Form</h2>
        <div className="formRow">
          <div className="formGroup">
            <label htmlFor="child-name">Child(ren) Name(s):</label>
            <input
              name="child-name"
              id="child-name"
              placeholder="Enter Child(ren) Name(s)"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="parent-name">Parent Name:</label>
            <input
              name="parent-name"
              id="parent-name"
              placeholder="Enter Parent Name"
              required
            />
          </div>
        </div>

        <div className="formRow">
          <div className="formGroup">
            <label htmlFor="phone">Cell Phone:</label>
            <input
              name="phone"
              id="phone"
              placeholder="Enter Phone Number"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              id="email"
              placeholder="Enter Email Address"
              required
            />
          </div>
        </div>

        <div className="formRow">
          <div className="formGroup">
            <label htmlFor="from-date">From:</label>
            <input
              type="date"
              name="from-date"
              id="from-date"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="to-date">To:</label>
            <input
              type="date"
              name="to-date"
              id="to-date"
              required
            />
          </div>
        </div>

        <div className="formGroup">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Enter your message here"
          />
        </div>

        {/* reCAPTCHA */}
        <div className="formGroup">
          <ReCAPTCHA
            sitekey="6LeT3n8rAAAAAKbLZI_H2AzT6Zk87-qQ1MJrAcCn" // Replace with site key
            onChange={handleCaptchaChange}
          />
        </div>

        <button
          type="submit"
          className="submitButton"
          disabled={!captchaVerified}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ExpenseStatement;
