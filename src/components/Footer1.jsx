// Footer.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaUtensils, FaCalendarAlt, FaCreditCard } from "react-icons/fa";

const Footer1 = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <Link to="/" className="footer-button">
          <FaHome className="footer-icon" />
        </Link>
        <Link to="/diet" className="footer-button">
          <FaUtensils className="footer-icon" />
        </Link>
        <Link to="/schedule" className="footer-button">
          <FaCalendarAlt className="footer-icon" />
        </Link>
        <Link to="/payment" className="footer-button">
          <FaCreditCard className="footer-icon" />
        </Link>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  padding: 2px 0;
  display: flex;
  justify-content: center;
  z-index: 900;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.5);

  .footer-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 700px;
    background: rgba(0, 0, 0, 0.8);
    padding: 4px;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }

  .footer-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    transition: all 0.3s ease-in-out;
  }

  .footer-icon {
    font-size: px;
    color: white;
    transition: color 0.3s ease-in-out;
  }

  .footer-button:hover {
    transform: translateY(-3px);

    .footer-icon {
      color: purple;
    }
  }

  @media (max-width: 480px) {
    .footer-container {
      width: 100%;
      max-width: none;
      border-radius: 0;
    }
  }
`;

export default Footer1;