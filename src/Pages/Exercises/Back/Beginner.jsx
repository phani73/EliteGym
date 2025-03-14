import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import BackImage from "../../../assets/images/back12.jpeg";
import "../../../css/beginner.css";

import bb1 from "../../../assets/exercises/back/beginnerBack/chestbacklefts.mp4";
import bb2  from "../../../assets/exercises/back/beginnerBack/latpulldownback.mp4";
import bb3 from "../../../assets/exercises/back/beginnerBack/lowerback.mp4";
import bb4 from "../../../assets/exercises/back/beginnerBack/seatedtraps.mp4";
import bb5 from "../../../assets/exercises/back/beginnerBack/tbarrows.mp4";
import bb6 from "../../../assets/exercises/back/beginnerBack/b1.mp4";


const beginnerExercises = [
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
    name: "Seated Cable Rows",
    video: bb4,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "T-Bar Rows",
    video: bb5,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Deadlifts",
    video: bb6,
    targetMuscles: "Lower Back, Hamstrings, Glutes, Core",
  },

];

const Beginner = () => {
  return (
    <div>
   <Button1/>
      <h1>Back - Beginner Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={BackImage} alt="BackImage"/>
      </div>
     </div>
      <p>Here are some beginner exercises for back.</p>
      <ExerciseCard exercises={beginnerExercises} />
      <div>
        <Footer1></Footer1>
      </div>
    </div>
  );
};

export default Beginner;
