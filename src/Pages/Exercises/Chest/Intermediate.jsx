import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ChestImage from "../../../assets/images/chest12.jpeg";
import "../../../css/beginner.css";


// Import videos with names
import ic1 from "../../../assets/exercises/chest/intermediate/flatdumbellpres.mp4";
import ic2 from "../../../assets/exercises/chest/intermediate/flies.mp4";
import ic3 from "../../../assets/exercises/chest/intermediate/incline1.mp4";
import ic4 from "../../../assets/exercises/chest/intermediate/lowerchestdumbelpress.mp4";
import ic5 from "../../../assets/exercises/chest/intermediate/chest121.mp4";
import ic6 from "../../../assets/exercises/chest/intermediate/chestdumbellpress.mp4";

// Define Exercise Data
const intermediateExercises = [
  {
    name: "Push-Ups",
    video: ic1, 
    targetMuscles:"chest muscles (pectoralis major), triceps, and the anterior deltoids (front of the shoulders)",
  },


  {
    name: "Incline Dumbbell Press",
    video: ic2,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",

  },
  {
    name: "Flat Bench Press",
    video: ic3,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
  {
    name: "Incline Push-Ups",
    video: ic4,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",
  },
  {
    name: "Push-Ups with Feet Elevated",
    video: ic5,
    targetMuscles: "Chest, Triceps, Shoulders",
  }, 
  {
    name: "Chest Press (Light Weight)",
    video: ic6,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
 
 
];



const Intermediate = () => {
  return (
    <div>
      <Button1/>
      <h1>Chest - Intermediate Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ChestImage} alt="ChestImage"/>
      </div>
     </div>
      <p>Here are some intermediate exercises for chest.</p>
      <ExerciseCard exercises={intermediateExercises} />
      <div>
        <Footer1></Footer1>
      </div>
    </div>
  );
};

export default Intermediate;
