import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ChestImage from "../../../assets/images/chest12.jpeg";
import "../../../css/beginner.css";

// Import videos with names
import ec1 from "../../../assets/exercises/chest/elite/chestbacklatslowerbench.mp4";
import ec2 from "../../../assets/exercises/chest/elite/chestflysmachine.mp4";
import ec3 from "../../../assets/exercises/chest/elite/verticalchest.mp4";
import ec4 from "../../../assets/exercises/chest/elite/c1.mp4";
import ec5 from "../../../assets/exercises/chest/elite/c2.mp4";
import ec6 from "../../../assets/exercises/chest/elite/chestinclinemidchest.mp4";

// Define Exercise Data
const eliteExercises = [
  {
    name: "Push-Ups",
    video: ec1, 
    targetMuscles:"chest muscles (pectoralis major), triceps, and the anterior deltoids (front of the shoulders)",
  },


  {
    name: "Incline Dumbbell Press",
    video: ec2,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",

  },
  {
    name: "Flat Bench Press",
    video: ec3,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
  {
    name: "Incline Push-Ups",
    video: ec4,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",
  },
  {
    name: "Push-Ups with Feet Elevated",
    video: ec5,
    targetMuscles: "Chest, Triceps, Shoulders",
  }, 
  {
    name: "Chest Press (Light Weight)",
    video: ec6,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
 
 
];
const Elite = () => {
  return (
    <div>
         <Button1 />
      <h1>Chest - Elite Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ChestImage} alt="ChestImage"/>
      </div>
     </div>
      <p>Here are some elite-level exercises for chest.</p>
      <ExerciseCard exercises={eliteExercises} />
      <div>
        <Footer1></Footer1>
      </div>
    </div>
    
  );
};

export default Elite;
