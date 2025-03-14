import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import LegsImage from "../../../assets/images/leg12.png";
import "../../../css/beginner.css";

// Import leg exercise videos
import il1 from "../../../assets/exercises/legs/intermediateLegs/squats.mp4";
import il2  from "../../../assets/exercises/legs/intermediateLegs/hamstrings.mp4";
import il3 from "../../../assets/exercises/legs/intermediateLegs/leg12.mp4";
import il4 from "../../../assets/exercises/legs/intermediateLegs/lunges.mp4";
import il5 from "../../../assets/exercises/legs/intermediateLegs/l12.mp4";
import il6 from "../../../assets/exercises/legs/intermediateLegs/l13.mp4";
import il7  from "../../../assets/exercises/legs/intermediateLegs/g12.mp4";
import il8  from "../../../assets/exercises/legs/intermediateLegs/c12.mp4";
import il9 from "../../../assets/exercises/legs/intermediateLegs/singlequads.mp4";

// // Define Exercise Data
const intermediateLegExercises = [
  {
    name: "Squats",
    video: il1,
    targetMuscles: "Quadriceps, Hamstrings, Glutes, Core",
  },
  {
    name: "Lunges",
    video: il2,
    targetMuscles: "Quadriceps, Hamstrings, Glutes, Calves",
  },
  {
    name: "Calf Raises",
    video: il3,
    targetMuscles: "Calves",
  },
  {
    name: "Leg Press",
    video: il4,
    targetMuscles: "Quadriceps, Hamstrings, Glutes, Calves",
  },
  {
    name: "Leg Extensions",
    video: il5,
    targetMuscles: "Quadriceps",
  },
  {
    name: "Leg Curls",
    video: il6,
    targetMuscles: "Hamstrings",
  },      
  {
    name: "Glute Bridges",
    video: il7,
    targetMuscles: "Glutes",
  },

  {
    name: "Single-Leg Squats",
    video: il8,
    targetMuscles: "Quadriceps, Hamstrings, Glutes, Calves",
  },
  {
    name: "Calf Raises",
    video: il9,
    targetMuscles: "Calves",
  },

];

const Intermediate = () => {
  return (
    <div>
      <Button1></Button1>
      <h1>Legs - Beginner Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={LegsImage} alt="LegsImage"/>
      </div>
     </div>
      <p>Here are some intermediate exercises for legs.</p>
      <ExerciseCard exercises={intermediateLegExercises} />
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default Intermediate;
