import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import LegsImage from "../../../assets/images/leg12.png";
import "../../../css/beginner.css";

// Import leg exercise videos
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
const eliteLegExercises = [
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

const Elite = () => {
  return (
    <div>
      <Button1></Button1>
      <h1>Legs - Elite Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={LegsImage} alt="LegsImage"/>
      </div>
     </div>
      <p>Here are some <strong>elite</strong> exercises for legs.</p>
      <ExerciseCard exercises={eliteLegExercises} />
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default Elite;
