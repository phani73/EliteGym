import React from 'react';
import styled from 'styled-components';
import Button1 from "../components/Button1";
import Footer1 from "../components/Footer1";

const Loader = () => {
  return (
    <StyledWrapper>
      <div>
        <Button1/>
        <div className="loader">
          <div className="circle">
            <div className="dot" />
            <div className="outline" />
          </div>
          <div className="circle">
            <div className="dot" />
            <div className="outline" />
          </div>
          <div className="circle">
            <div className="dot" />
            <div className="outline" />
          </div>
          <div className="circle">
            <div className="dot" />
            <div className="outline" />
          </div>
        </div>
        <Footer1/>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

  position: fixed;  /* Ensures full-screen coverage */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    --color: hsl(0, 0%, 87%);
    --animation: 2s ease-in-out infinite;
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3vw; /* 🔹 Reduced size */
    height: 3vw;
    border: solid 2px var(--color);
    border-radius: 50%;
    margin: 0 1.5vw;
    background-color: transparent;
    animation: circle-keys var(--animation);
  }

  .dot {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 60%; /* Adjusted size */
    height: 60%;
    border-radius: 50%;
    background-color: var(--color);
    animation: dot-keys var(--animation);
  }

  .outline {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: outline-keys var(--animation);
  }

  /* Media Queries for Mobile */
  @media (max-width: 768px) {
    .circle {
      width: 5vw;
      height: 5vw;
      margin: 0 1vw;
    }
  }

  @media (max-width: 480px) {
    .circle {
      width: 6vw;
      height: 6vw;
      margin: 0 0.8vw;
    }
  }

  @keyframes circle-keys {
    0% { transform: scale(0.5); opacity: 1; }
    50% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(0.5); opacity: 1; }
  }

  @keyframes dot-keys {
    0% { transform: scale(1); }
    50% { transform: scale(1); }
    100% { transform: scale(1); }
  }

  @keyframes outline-keys {
    0% { transform: scale(0); outline: solid 20px var(--color); outline-offset: 0; opacity: 1; }
    100% { transform: scale(1); outline: solid 0 transparent; outline-offset: 20px; opacity: 0; }
  }
`;

export default Loader;
