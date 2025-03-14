import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import LegsImage from "../../../assets/images/leg12.png";
import "../../../css/beginner.css";

// Import leg exercise videos
import bl1 from "../../../assets/exercises/legs/beginnerLegs/quadssitups.mp4";
import bl2  from "../../../assets/exercises/legs/beginnerLegs/legsextensions.mp4";
import bl3 from "../../../assets/exercises/legs/beginnerLegs/calves12.mp4";
import bl4 from "../../../assets/exercises/legs/beginnerLegs/l3.mp4";
import bl5 from "../../../assets/exercises/legs/beginnerLegs/l2.mp4";
import bl6 from "../../../assets/exercises/legs/beginnerLegs/l1.mp4";

// // Define Exercise Data
const beginnerLegExercises = [
  {
    name: "Squats",
    video: bl1,
    targetMuscles: "Quadriceps, Hamstrings, Glutes, Core",
  },
  {
    name: "Lunges",
    video: bl2,
    targetMuscles: "Quadriceps, Hamstrings, Glutes, Calves",
  },
  {
    name: "Calf Raises",
    video: bl3,
    targetMuscles: "Calves",
  },
  {
    name: "Leg Extensions",
    video: bl4,
    targetMuscles: "Quadriceps",
  },
  {
    name: "Leg Curls",
    video: bl5,
    targetMuscles: "Hamstrings",
  },
  {
    name: "Hip Thrusts",
    video: bl6,
    targetMuscles: "Glutes, Hamstrings",
  },
];

const Beginner = () => {
  return (
    <div>
     <Button1/>
      <h1>Legs - Beginner Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={LegsImage} alt="LegsImage"/>
      </div>
     </div>
      <p>Here are some beginner exercises for legs.</p>
      <ExerciseCard exercises={beginnerLegExercises} />
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default Beginner;
