import React from 'react';
import styled from 'styled-components';

const Button = ({ title }) => {
  return (
    <StyledWrapper>
      <button className="button">
        <svg className="bell" viewBox="0 0 448 512">
          <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
        </svg>
        {title}
        <div className="arrow">›</div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 0px 15px;
    background-color: rgb(66, 66, 66);
    border-radius: 10px;
    color: white;
    border: none;
    position: relative;
    cursor: pointer;
    transition-duration: .2s;
  }

  .bell {
    width: 13px;
  }

  .bell path {
    fill: rgb(0, 206, 62);
  }

  .arrow {
    position: absolute;
    right: 0;
    width: 30px;
    height: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button:hover {
    background-color: rgb(77, 77, 77);
    transition-duration: .2s;
  }

  .button:hover .arrow {
    animation: slide-right .6s ease-out both;
  }

  @keyframes slide-right {
    0% {
      transform: translateX(-10px);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .button:active {
    transform: translate(1px , 1px);
    transition-duration: .2s;
  }
`;

export default Button;
