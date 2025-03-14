import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ChestImage from "../../../assets/images/chest12.jpeg";
import "../../../css/beginner.css";

// Import videos with names

import bc1 from "../../../assets/exercises/chest/beginner/chestpressmachine.mp4";
import bc2  from "../../../assets/exercises/chest/beginner/chestpressmachine12.mp4";
import bc3 from "../../../assets/exercises/chest/beginner/flatbenchpress.mp4";
import bc4 from "../../../assets/exercises/chest/beginner/inclinepushups.mp4";
import bc5 from "../../../assets/exercises/chest/beginner/pushuos.mp4";
import bc6 from "../../../assets/exercises/chest/beginner/b1.mp4";

// Define Exercise Data
const beginnerExercises = [
  {
    name: "Push-Ups",
    video: bc1, 
    targetMuscles:"chest muscles (pectoralis major), triceps, and the anterior deltoids (front of the shoulders)",
  },


  {
    name: "Incline Dumbbell Press",
    video: bc2,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",

  },
  {
    name: "Flat Bench Press",
    video: bc3,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
  {
    name: "Incline Push-Ups",
    video: bc4,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",
  },
  {
    name: "Push-Ups with Feet Elevated",
    video: bc5,
    targetMuscles: "Chest, Triceps, Shoulders",
  }, 
  {
    name: "Chest Press (Light Weight)",
    video: bc6,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
 
 
];

const Beginner = () => {
  return (
    <div>
      <Button1 />
      <h1>Chest - Beginner Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ChestImage} alt="ChestImage"/>
      </div>
     </div>
      <p>Here are some beginner exercises for chest.</p>
      <ExerciseCard exercises={beginnerExercises} />
      <div>
        <Footer1></Footer1>
      </div>
    </div>

  );
};

export default Beginner;
