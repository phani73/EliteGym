// Card.js
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
          <ul className="list-size">
            {['Beginner', 'Intermediate', 'Elite', 'All'].map((level) => (
              <li key={level} className="item-list">
                <button
                  className={`item-list-button ${
                    selectedLevel === level.toLowerCase() ? 'active' : ''
                  }`}
                  onClick={() => setSelectedLevel(level)}
                >
                  {level}
                </button>
              </li>
            ))}
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
    --primary-800: #4c1d95;
    --primary-shadow: #2e1065;
    --light: #d9d9d9;
    --zinc-800: #18181b;
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
    background-color: var(--bg-card);
    border-radius: 1rem;
  }

  .image_container {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    z-index: 5;
    width: 100%;
    height: 20rem;
    border-radius: 0.5rem;
  }

  .image_container .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    overflow: hidden;
    width: 100%;
    font-size: 3.5rem;
    font-weight: 600;
    color: var(--light);
    text-transform: capitalize;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .size {
    width: 83%;
    font-size: 1rem;
    color: var(--light);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list-size {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    margin-left: 4.2rem;
    width: 100rem;
    font-size: clamp(1rem, 1.2vw, 1.5rem);
  }

  .list-size .item-list {
    list-style: none;
  }

  .list-size .item-list-button {
    cursor: pointer;
    padding: 0.75rem 1.25rem;
    background-color: var(--zinc-800);
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--light);
    border: 2px solid var(--zinc-800);
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
  }

  .item-list-button:hover {
    border: 2px solid var(--light);
  }

  .item-list-button:focus {
    background-color: var(--primary);
    border: 2px solid var(--primary-shadow);
    box-shadow: inset 0px 1px 4px var(--primary-shadow);
  }

  .action {
    display: flex;
    align-items: center;
   
    margin-left:28.5px;
    gap: 1rem;
  }

 .cart-button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
    width: 100%; /* Decreased width for better fit */
    // max-width: 10rem; /* Ensuring it doesn't get too large */
    background-image: var(--bg-linear);
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--light);
    text-wrap: nowrap;
    border: 2px solid hsla(262, 83%, 58%, 0.5);
    border-radius: 0.5rem;
    box-shadow: inset 0 0 0.25rem 1px var(--light);
  }
`;

export default Card;