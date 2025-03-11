import React from 'react';
import styled from 'styled-components';

const Card2 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="tools">
          <div className="circle">
            <span className="red box" />
          </div>
          <div className="circle">
            <span className="yellow box" />
          </div>
          <div className="circle">
            <span className="green box" />
          </div>
        </div>
        <div className="card__content">
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
   width: 190px;
   height: 254px;
   margin: 0 auto;
   background-color: #011522;
   border-radius: 8px;
   z-index: 1;
  }

  .tools {
   display: flex;
   align-items: center;
   padding: 9px;
  }

  .circle {
   padding: 0 4px;
  }

  .box {
   display: inline-block;
   align-items: center;
   width: 10px;
   height: 10px;
   padding: 1px;
   border-radius: 50%;
  }

  .red {
   background-color: #ff605c;
  }

  .yellow {
   background-color: #ffbd44;
  }

  .green {
   background-color: #00ca4e;
  }`;

export default Card2;


