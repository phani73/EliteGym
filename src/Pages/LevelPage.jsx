import React from "react";
import { useParams } from "react-router-dom";

const LevelPage = () => {
  const { exerciseName, level } = useParams();

  return (
    <div>
      <h1>{exerciseName} - {level} Level</h1>
      <p>Here are some {level} level exercises for {exerciseName}.</p>
    </div>
  );
};

export default LevelPage;
