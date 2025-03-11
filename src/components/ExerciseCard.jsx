import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background: #000;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
`;

const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  background: #000;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const ExerciseName = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: #222;
`;
const TargetMuscles = styled.div`
  width: 100%;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #f2f3f4 ;
  background: #333;
  border-top: 1px solid #444;
`;

const ExerciseCard = ({ exercises }) => {
  return (
    <CardContainer>
      {exercises.map((exercise, index) => (
        <Card key={index}>
          <VideoWrapper>
            <Video controls controlsList="nodownload" >
              <source src={exercise.video} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </VideoWrapper>
          <ExerciseName>{exercise.name}</ExerciseName>
          <TargetMuscles>🎯 Target Muscles: {exercise.targetMuscles}</TargetMuscles>
          
        </Card>
      ))}
    </CardContainer>
  );
};


export default ExerciseCard;
