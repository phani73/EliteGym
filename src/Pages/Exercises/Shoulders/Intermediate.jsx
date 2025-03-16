import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ShouldersImage from "../../../assets/images/shoulder12.png";
import "../../../css/beginner.css";

// Import shoulder videos
import si1 from "../../../assets/exercises/shoulders/intermediateShoulders/s11.mp4";
import si2  from "../../../assets/exercises/shoulders/intermediateShoulders/s122.mp4";
import si3 from "../../../assets/exercises/shoulders/intermediateShoulders/shoulderbarbelllifts.mp4";
import si4  from "../../../assets/exercises/shoulders/intermediateShoulders/shoulderpulls.mp4";
import si5 from "../../../assets/exercises/shoulders/intermediateShoulders/sitlaterlaraises.mp4";
import si6 from "../../../assets/exercises/shoulders/intermediateShoulders/traps.mp4";


// // Define Exercise Data
const beginnerShoulderExercises = [
  {
    name: "Front Raises",
    video: si1,
    targetMuscles: "Shoulders",
  },
  {
    name: "Shoulder Press",
    video: si2,
    targetMuscles: "Shoulders",
  },
  {
    name: "Shoulder Press",
    video: si3,
    targetMuscles: "Shoulders",
  },
  {
    name: "Lateral Raises",
    video: si4,
    targetMuscles: "Shoulders",
  },
  {
    name: "Shoulder Press",
    video: si5,
    targetMuscles: "Shoulders",
  },
  {
    name: "Shoulder Press",
    video: si6,
    targetMuscles: "Shoulders",
  },
];

const Intermediate = () => {
  return (
    <div>
      <Button1 />
      <h1>Shoulders - Intermediate Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ShouldersImage} alt="ArmImage"/>
      </div>
     </div>
      <p>Here are some Intermediate exercises for shoulders.</p>
      <ExerciseCard exercises={beginnerShoulderExercises} />
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default Intermediate;
