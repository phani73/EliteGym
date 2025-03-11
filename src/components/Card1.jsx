import React from 'react';
import styled from 'styled-components';

const Card1 = ({title,cost}) => {
  return (
    <StyledWrapper>
      <div className="notification">
        <div className="notiglow" />
        <div className="notiborderglow" />
        <div className="notititle">{title}</div>
        <div className="notibody">Cost: <span>{cost}</span></div>

      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .notification {
    display: flex;
    flex-direction: column;
    isolation: isolate;
    position: relative;
    width: 75%; /* Responsive width */
     width: 250px; /* Prevent it from getting too large */
    height: auto; /* Adjusts dynamically */
    background: #29292c;
    border-radius: 1rem;
    overflow: hidden;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1rem;
    --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
    --color: #32a6ff;
    
    padding: 15px; /* Adds inner spacing */
    margin-bottom: 15px; /* Space between cards */
  }

  .notification:before {
    position: absolute;
    content: "";
    inset: 0.0625rem;
    border-radius: 0.9375rem;
    background: #18181b;
    z-index: 2;
  }

  .notification:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;
    border-radius: 0.125rem;
    background: var(--gradient);
    transition: transform 300ms ease;
    z-index: 4;
  }

  .notification:hover:after {
    transform: translateX(0.15rem);
  }

  .notititle {
    color: var(--color);
    padding: 0.65rem 0.25rem 0.4rem 1.25rem;
    font-weight: 500;
    font-size: 1.2rem;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notititle {
    transform: translateX(0.15rem);
  }

  .notibody {
    color: #99999d;
    padding: 0 1.25rem;
    transition: transform 300ms ease;
    font-size: 0.9rem;
    z-index: 5;
  }

  .notification:hover .notibody {
    transform: translateX(0.25rem);
  }

  .notiglow,
  .notiborderglow {
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle closest-side at center, white, transparent);
    opacity: 0;
    transition: opacity 300ms ease;
  }

  .notiglow {
    z-index: 3;
  }

  .notiborderglow {
    z-index: 1;
  }

  .notification:hover .notiglow {
    opacity: 0.1;
  }

  .notification:hover .notiborderglow {
    opacity: 0.1;
  }

  /* RESPONSIVE STYLES */
  @media (max-width: 768px) {
    .notification {
      width: 90%;
      max-width: 300px;
    }

    .notititle {
      font-size: 1.1rem;
    }

    .notibody {
      font-size: 0.85rem;
    }
    .notibody span {
    font-size:10px;
    font-weight: bold;
    color: white; /* A bright gold color to highlight cost */
    font-size: 1rem; /* Slightly larger for emphasis */
  }

  }

  @media (max-width: 480px) {
    .notification {
      width: 95%;
      max-width: 320px;
    }

    .notititle {
      font-size: 1rem;
    }

    .notibody {
      font-size: 0.8rem;
    }
  }
`;

export default Card1;
