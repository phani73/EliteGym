import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ShouldersImage from "../../../assets/images/shoulder12.png";
import "../../../css/beginner.css";

// Import leg exercise videos
import s1 from "../../../assets/exercises/shoulders/beginnerShoulder/frontreaises.mp4";
import s2  from "../../../assets/exercises/shoulders/beginnerShoulder/shoulderpress.mp4";
import s3 from "../../../assets/exercises/shoulders/beginnerShoulder/shoulderups.mp4";
import s4 from "../../../assets/exercises/shoulders/beginnerShoulder/laterall.mp4";
import s5 from "../../../assets/exercises/shoulders/beginnerShoulder/s123.mp4";
import s6 from "../../../assets/exercises/shoulders/beginnerShoulder/sss.mp4";
import s7 from "../../../assets/exercises/shoulders/beginnerShoulder/traps.mp4";



// // Define Exercise Data
const beginnerLegExercises = [
 {
  name: "Front Raises",
  video: s1,
  targetMuscles: "Shoulders",

 },
 {
  name: "Shoulder Press",
  video: s2,
  targetMuscles: "Shoulders",
 },
 {
  name: "Shoulder Press",
  video: s3,
  targetMuscles: "Shoulders",
 },
 {
  name: "Lateral Raises",
  video: s4,
  targetMuscles: "Shoulders",
 },
 {
  name: "Shoulder Press",
  video: s5,
  targetMuscles: "Shoulders",
 },
 {
  name: "Shoulder Press",
  video: s6,
  targetMuscles: "Shoulders",
 },
 {
  name: "Shoulder Press",
  video: s7,
  targetMuscles: "Shoulders",
 },
 
];

const Beginner = () => {
  return (
    <div>
     <Button1/>
      <h1>Shoulder- Beginner Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ShouldersImage} alt="ArmImage"/>
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
