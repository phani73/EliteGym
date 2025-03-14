import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import BackImage from "../../../assets/images/back12.jpeg";
import "../../../css/beginner.css";

// Import videos with names
import bb1 from "../../../assets/exercises/back/intermediateBack/backbacklats.mp4";
import bb2  from "../../../assets/exercises/back/intermediateBack/backrows.mp4";
import bb3 from "../../../assets/exercises/back/intermediateBack/biceppullups.mp4";
import bb4 from "../../../assets/exercises/back/intermediateBack/inclinelatsuppertarps.mp4";
import bb5 from "../../../assets/exercises/back/intermediateBack/lowerback.mp4";
import bb6 from "../../../assets/exercises/back/intermediateBack/traps.mp4";
import bb7 from "../../../assets/exercises/back/intermediateBack/b2.mp4";

// Define Exercise Data
const intermediateExercises = [
  {
    name: "Pull-Ups",
    video: bb1, 
    targetMuscles: "Lats, Biceps, Upper Back, Core",
  },
  {
    name: "Bent-Over Rows",
    video: bb2,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Lat Pulldown",
    video: bb3,
    targetMuscles: "Lats, Upper Back, Biceps",
  },
  {
    name: "Incline Dumbbell Rows",
    video: bb4,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Seated Cable Rows",
    video: bb5,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Deadlifts",
    video: bb6,
    targetMuscles: "Hamstrings, Glutes, Lower Back, Core",
  },
  {
    name: "Chin-Ups",
    video: bb7,
    targetMuscles: "Biceps, Upper Back, Core",
  },
];

const Intermediate = () => {
  return (
    <div>
   <Button1/>
      <h1>Back - Intermediate Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={BackImage} alt="BackImage"/>
      </div>
     </div>
      <p>Here are some intermediate exercises for back.</p>
      {/* <ExerciseCard exercises={beginnerExercises} /> */}
      <div>
        <Footer1></Footer1>
      </div>
    </div>
  );
};

export default Intermediate;
