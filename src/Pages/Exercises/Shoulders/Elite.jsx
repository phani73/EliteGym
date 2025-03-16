import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ShouldersImage from "../../../assets/images/shoulder12.png";
import "../../../css/beginner.css";

// Import shoulder videos
import se1 from "../../../assets/exercises/shoulders/eliteShoulders/s122.mp4";
import se2  from "../../../assets/exercises/shoulders/eliteShoulders/frontraises.mp4";
import se3 from "../../../assets/exercises/shoulders/eliteShoulders/shoulderropes.mp4";
import se4  from "../../../assets/exercises/shoulders/eliteShoulders/shouldervertical.mp4";
import se5 from "../../../assets/exercises/shoulders/eliteShoulders/ss.mp4";
import se6 from "../../../assets/exercises/shoulders/eliteShoulders/standingdumbellpress.mp4";
import se7 from "../../../assets/exercises/shoulders/eliteShoulders/traps.mp4";

// // Define Exercise Data
const eliteShoulderExercises = [
 {
  name: "Front Raises",
  video: se1,
  targetMuscles: "Shoulders",

 },
 {
  name: "Shoulder Press",
  video: se2,
  targetMuscles: "Shoulders",
 },
 {
  name: "Shoulder Press",
  video: se3,
  targetMuscles: "Shoulders",
 },
 {
  name: "Lateral Raises",
  video: se4,
  targetMuscles: "Shoulders",
 },
 {
  name: "Shoulder Press",
  video: se5,
  targetMuscles: "Shoulders",
 },
 {
  name: "Shoulder Press",
  video: se6,
  targetMuscles: "Shoulders",
 },
 {
  name: "Shoulder Press",
  video: se7,
  targetMuscles: "Shoulders",
 },
 
];

const All = () => {
  return (
    <div>
      <Button1 />
      <h1>Shoulders - Elite Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ShouldersImage} alt="ArmImage"/>
      </div>
     </div>
      <p>Here are some Elite exercises for shoulders.</p>
      <ExerciseCard exercises={eliteShoulderExercises} />
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default All;
