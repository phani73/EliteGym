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

import il1 from "../../../assets/exercises/legs/intermediateLegs/squats.mp4";
import il2  from "../../../assets/exercises/legs/intermediateLegs/hamstrings.mp4";
import il3 from "../../../assets/exercises/legs/intermediateLegs/leg12.mp4";
import il4 from "../../../assets/exercises/legs/intermediateLegs/lunges.mp4";
import il5 from "../../../assets/exercises/legs/intermediateLegs/l12.mp4";
import il6 from "../../../assets/exercises/legs/intermediateLegs/l13.mp4";
import il7  from "../../../assets/exercises/legs/intermediateLegs/g12.mp4";
import il8  from "../../../assets/exercises/legs/intermediateLegs/c12.mp4";
import il9 from "../../../assets/exercises/legs/intermediateLegs/singlequads.mp4";


import el1 from "../../../assets/exercises/legs/elitelegs/calves12.mp4";
import el2  from "../../../assets/exercises/legs/elitelegs/hamstrings12.mp4";
import el3 from "../../../assets/exercises/legs/elitelegs/gluters.mp4";
import el4 from "../../../assets/exercises/legs/elitelegs/legsextensions.mp4";
import el5 from "../../../assets/exercises/legs/elitelegs/lunges.mp4";
import el6 from "../../../assets/exercises/legs/elitelegs/squats.mp4";
import el7  from "../../../assets/exercises/legs/elitelegs/l12.mp4";
import el8  from "../../../assets/exercises/legs/elitelegs/l13.mp4";
import el9 from "../../../assets/exercises/legs/elitelegs/l14.mp4";
// // Define Exercise Data
const allLegExercises = [
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
  {
    name: "Squats",
    video: el1,
    targetMuscles: "Quadriceps, Hamstrings, Glutes, Core",
  },
  {
    name: "Lunges",
    video: el2,
    targetMuscles: "Quadriceps, Hamstrings, Glutes, Calves",
  },
  {
    name: "Calf Raises",
    video: el3,
    targetMuscles: "Calves",
  },
  {
    name: "Leg Extensions",
    video: el4,
    targetMuscles: "Quadriceps",
  },
  {
    name: "Leg Curls",
    video: el5,
    targetMuscles: "Hamstrings",
  },
  {
    name: "Glute Bridges",
    video: el6,
    targetMuscles: "Glutes",
  },
  {
    name: "Step-Ups",
    video: el7,
    targetMuscles: "Quadriceps, Hamstrings, Glutes, Calves",
  },
  {
    name: "Deadlifts",
    video: el8,
    targetMuscles: "Hamstrings, Glutes, Lower Back, Core",
  },
  {
    name: "Romanian Deadlifts",
    video: el9,
    targetMuscles: "Hamstrings, Glutes, Lower Back",
  },
];

const All = () => {
  return (
    <div>
      <Button1></Button1>
      <h1>Legs - Beginner Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={LegsImage} alt="LegsImage"/>
      </div>
     </div>
      <p>Here are all exercises for legs.</p>
      <ExerciseCard exercises={allLegExercises} />
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default All;
