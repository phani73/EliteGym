import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import AbsImage from "../../../assets/images/abs12.jpg";
import "../../../css/beginner.css";

// // Import arm exercise videos
import s1 from "../../../assets/exercises/abs/abs1.mp4";
import s2  from "../../../assets/exercises/abs/abs2.mp4";
import s3 from "../../../assets/exercises/abs/abs3.mp4";
import s4 from "../../../assets/exercises/abs/cardio12.mp4";
import s5 from "../../../assets/exercises/abs/cardi1.mp4";
import s6 from "../../../assets/exercises/abs/cardio.mp4";
import s7 from "../../../assets/exercises/abs/cardio13.mp4";
import s8 from "../../../assets/exercises/abs/cyclingcardio.mp4";
import s9 from "../../../assets/exercises/abs/legraises.mp4";
import s10 from "../../../assets/exercises/abs/sideabs.mp4";

// Define Exercise Data
const beginnerArmExercises = [
  {
    name: "Cable Curls",
    video: s1,
    targetMuscles: "Biceps",
  },
  {
    name: "Cable Rope Pushdowns",
    video: s2,
    targetMuscles: "Triceps",
  },
  {
    name: "Dumbbell Bicep Curls",
    video: s3,
    targetMuscles: "Biceps",
  },
  {
    name: "Dumbbell Tricep Extensions",
    video: s4,
    targetMuscles: "Triceps",
  },
  {
    name: "Dumbbell Hammer Curls",
    video: s5,
    targetMuscles: "Biceps, Forearms",
  },
  {
    name: "Dumbbell Skull Crushers",
    video: s6,
    targetMuscles: "Triceps",
  },
  {
    name: "Bench Curls",
    video: s7,
    targetMuscles: "Biceps, Forearms",
  },
  {
    name: "Bicep Curls",
    video: s8,
    targetMuscles: "Biceps, Forearms",
  },
  {
    name: "Tricep Dips",
    video: s9,
    targetMuscles: "Triceps, Shoulders, Chest",
  },
  {
    name: "Hammer Curls",
    video: s10,
    targetMuscles: "Biceps, Forearms",
  },
];

const Intermediate = () => {
  return (
    <div>
      <Button1 />
      <h1>Arms - Beginner Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={AbsImage} alt="AbsImage"/>
      </div>
     </div>
      <p>Here are some beginner exercises for arms.</p>
      <ExerciseCard exercises={beginnerArmExercises} />
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default Intermediate;
