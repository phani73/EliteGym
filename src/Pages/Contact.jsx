import React from "react";
import Footer1 from "../components/Footer1";
import Button1 from "../components/Button1";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="outer-container">
      <div className="contact-container">
        <Button1/>
        <h1 className="contact-title">Contact Us</h1>
        
        <div className="content">
        
          </div>
          <div className="card1">
            <h3>Email</h3>
            <p>elitegym12@gmail.com</p>
          </div>
          <div className="card1">
            <h3>Phone</h3>
            <p>+919848312738</p>
          </div>
          <div className="card1">
            <h3>Name</h3>
            <p>Sateesh Babu</p>
          </div>
          
        <Footer1/>
      </div>
    </div>
  );
};

export default Contact;