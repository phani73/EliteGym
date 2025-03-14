import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import BackImage from "../../../assets/images/back12.jpeg";
import "../../../css/beginner.css";

// Import videos with names
import eb1 from "../../../assets/exercises/back/eliteBack/rosesdumbell.mp4";
import eb2  from "../../../assets/exercises/back/eliteBack/latsmachinerows.mp4";
import eb3 from "../../../assets/exercises/back/eliteBack/lowerback.mp4";
import eb4 from "../../../assets/exercises/back/eliteBack/widepullups.mp4";
import eb5 from "../../../assets/exercises/back/eliteBack/lowerback.mp4";
import eb6 from "../../../assets/exercises/back/eliteBack/deadlift.mp4";
import eb7 from "../../../assets/exercises/back/eliteBack/b3.mp4";

// Define Exercise Data
const eliteExercises = [
  {
    name: "Pull-Ups",
    video: eb1, 
    targetMuscles: "Lats, Biceps, Upper Back, Core",
  },
  {
    name: "Bent-Over Rows",
    video: eb2,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Lat Pulldown",
    video: eb3,
    targetMuscles: "Lats, Upper Back, Biceps",
  },
  {
    name: "T-Bar Rows",
    video: eb4,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Seated Cable Rows",
    video: eb5,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Deadlifts",
    video: eb6,
    targetMuscles: "Lower Back, Hamstrings, Glutes, Core",
  },
  {
    name: "Chin-Ups",
    video: eb7,
    targetMuscles: "Lats, Biceps, Upper Back, Core",
  },

];

const Elite = () => {
  return (
    <div>
   <Button1/>
      <h1>Back - Elite Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={BackImage} alt="BackImage"/>
      </div>
     </div>
      <p>Here are some elite exercises for back.</p>
      <ExerciseCard exercises={eliteExercises} />
      <div>
        <Footer1></Footer1>
      </div>
    </div>
  );
};

export default Elite;
