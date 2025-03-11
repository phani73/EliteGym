import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = ({ name, image }) => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('all');

  const handleGoClick = () => {
    navigate(`/exercise/${name.toLowerCase()}/${selectedLevel.toLowerCase()}`);
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="image_container">
          <img src={image} alt={name} className="image" />
        </div>
        <div className="title">
          <span>{name}</span>
        </div>
        
        <div className="size">
          {/* First row: Beginner, Intermediate, Elite */}
          <ul className="list-size first-row">
            {['Beginner', 'Intermediate', 'Elite'].map((level) => (
              <li key={level} className="item-list">
                <button
                  className={`item-list-button ${
                    selectedLevel === level.toLowerCase() ? 'active' : ''
                  }`}
                  onClick={() => setSelectedLevel(level.toLowerCase())}
                >
                  {level}
                </button>
              </li>
            ))}
          </ul>

          {/* Second row: All */}
          <ul className="list-size second-row">
            <li className="item-list full-width">
              <button
                className={`item-list-button ${
                  selectedLevel === 'all' ? 'active' : ''
                }`}
                onClick={() => setSelectedLevel('all')}
              >
                All
              </button>
            </li>
          </ul>
        </div>

        <div className="action">
          <button className="cart-button" onClick={handleGoClick}>
            <span>Go</span>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --bg-card: #27272a;
    --primary: #6d28d9;
    --primary-shadow: #2e1065;
    --light: #d9d9d9;
    --zinc-800: #18181b;
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    width: 200px;
    height: 300px;
    background-color: var(--bg-card);
    border-radius: 1rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }

  .image_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    overflow: hidden;
    border-radius: 0.5rem;
  }

  .image_container .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--light);
    text-transform: capitalize;
    text-align: center;
  }

  .size {
    font-size: 1rem;
    color: var(--light);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  /* First row (3 buttons) */
  .first-row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-right:40px;
    gap: 6px;
    width: 100%;
  }

  .first-row .item-list {
    list-style: none;
    flex: 1;
    max-width: 50%; /* Ensures 3 equal buttons */
    display: flex;
    justify-content:center;
  }

  /* Second row (Only "All") */
  .second-row {
    display: flex;
    justify-content: center;
    margin-right:40px; 
    width: 100%;
  }

  .second-row .item-list {
    list-style: none;
    flex: 1;
    max-width: 100%;
    display: flex;
  justify-content: center; 
  }

  .item-list-button {
    cursor: pointer;
    width: 100%;
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
    font-weight: bold;
    background-color: var(--zinc-800);
    color: var(--light);
    border: 2px solid var(--zinc-800);
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
    text-align: center;
  }

  .item-list-button:hover {
    border-color: var(--light);
  }

  .item-list-button:focus {
    background-color: var(--primary);
    border: 2px solid var(--primary-shadow);
  }

  .action {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 0.5rem;
  }

  .cart-button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 0.8rem;
    font-size: 1rem;
    font-weight: bold;
    background-image: var(--bg-linear);
    color: var(--light);
    border: 2px solid hsla(262, 83%, 58%, 0.5);
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
   
  }

  .cart-button:hover {
    background-color: var(--primary-shadow);
  }

  /* Mobile Responsiveness */
  @media (max-width: 600px) {
    .card {
      width: 90%;
      height: auto;
      padding: 1.2rem;
    }

    .image_container {
      height: 100px;
    }

    .title {
      font-size: 1.4rem;
    }

    .first-row,
    .second-row {
      gap: 4px;
    }

    .item-list-button {
      font-size: 0.8rem;
      padding: 0.4rem 0.6rem;
    }

    .cart-button {
      font-size: 0.9rem;
    }
  }
`;

export default Card;
