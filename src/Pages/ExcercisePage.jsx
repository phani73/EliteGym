import React from "react";
import { useParams, Link } from "react-router-dom";

const ExercisePage = () => {
  const { exerciseName } = useParams();
  const levels = ["Beginner", "Intermediate", "Elite", "All"];

  return (
    <div>
      <h1>{exerciseName} Exercises</h1>
      <ul>
        {levels.map((level) => (
          <li key={level}>
            <Link to={`/exercise/${exerciseName}/${level.toLowerCase()}`}>
              {level}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExercisePage;
