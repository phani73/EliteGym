import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ShouldersImage from "../../../assets/images/shoulder12.png";
import "../../../css/beginner.css";

// Import shoulder videos
import s1 from "../../../assets/exercises/shoulders/beginnerShoulder/frontreaises.mp4";
import s2  from "../../../assets/exercises/shoulders/beginnerShoulder/shoulderpress.mp4";
import s3 from "../../../assets/exercises/shoulders/beginnerShoulder/shoulderups.mp4";
import s4 from "../../../assets/exercises/shoulders/beginnerShoulder/laterall.mp4";
import s5 from "../../../assets/exercises/shoulders/beginnerShoulder/s123.mp4";
import s6 from "../../../assets/exercises/shoulders/beginnerShoulder/sss.mp4";
import s7 from "../../../assets/exercises/shoulders/beginnerShoulder/traps.mp4";


import si1 from "../../../assets/exercises/shoulders/intermediateShoulders/s11.mp4";
import si2  from "../../../assets/exercises/shoulders/intermediateShoulders/s122.mp4";
import si3 from "../../../assets/exercises/shoulders/intermediateShoulders/shoulderbarbelllifts.mp4";
import si4  from "../../../assets/exercises/shoulders/intermediateShoulders/shoulderpulls.mp4";
import si5 from "../../../assets/exercises/shoulders/intermediateShoulders/sitlaterlaraises.mp4";
import si6 from "../../../assets/exercises/shoulders/intermediateShoulders/traps.mp4";

import se1 from "../../../assets/exercises/shoulders/eliteShoulders/s122.mp4";
import se2  from "../../../assets/exercises/shoulders/eliteShoulders/frontraises.mp4";
import se3 from "../../../assets/exercises/shoulders/eliteShoulders/shoulderropes.mp4";
import se4  from "../../../assets/exercises/shoulders/eliteShoulders/shouldervertical.mp4";
import se5 from "../../../assets/exercises/shoulders/eliteShoulders/ss.mp4";
import se6 from "../../../assets/exercises/shoulders/eliteShoulders/standingdumbellpress.mp4";
import se7 from "../../../assets/exercises/shoulders/eliteShoulders/traps.mp4";

// // Define Exercise Data
const beginnerShoulderExercises = [
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
  {
    name: "Shoulder Press",
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
    name: "Shoulder Press",
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
  {
    name: "Shoulder Press",
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
    name: "Shoulder Press",
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
     <Button1/>
      <h1>Shoulders - All Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ShouldersImage} alt="ArmImage"/>
      </div>
     </div>
      <p>Here are all exercises for shoulders.</p>
      <ExerciseCard exercises={beginnerShoulderExercises} />
      <div>
      <Footer1></Footer1>
      </div>
    </div>
  );
};

export default All;
