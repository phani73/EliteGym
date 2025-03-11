import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="button-container">
        <button className="Download-button">
          <p className="header">ELITE GYM</p>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #2E2E2E;
    padding: 0.5rem 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
  }

  .Download-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18rem; /* Increased width */
    height: 3rem; /* Decreased height */
    font-size: 1.375rem;
    font-weight: bold;
    color: white;
    background: #5d6d7e;
    border: none;
    border-radius: 0.9375rem;
    cursor: pointer;
    padding: 0.5rem;
    text-transform: uppercase;
  }

  .header {
    margin: 0;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    height: 2.75rem;
    max-width: 15rem;
  }


 

`;

export default Button;
