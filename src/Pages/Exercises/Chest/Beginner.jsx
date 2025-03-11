import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ChestImage from "../../../assets/images/chest12.jpeg";
import "../../../css/beginner.css";

// Import videos with names
import pushupsVideo from "../../../assets/chestVideos/pushups.mp4";
import flatdumbellPressVideo from "../../../assets/chestVideos/flatdumbellPress.mp4";
import flatbenchpressVideo from "../../../assets/chestVideos/flatbenchpress.mp4";

// Define Exercise Data
const beginnerExercises = [
  {
    name: "Push-Ups",
    video: pushupsVideo, 
    targetMuscles:"chest muscles (pectoralis major), triceps, and the anterior deltoids (front of the shoulders)",
  },
  {
    name: "Chest Press (Light Weight)",
    video: flatdumbellPressVideo,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
  {
    name: "Incline Dumbbell Press",
    video: flatbenchpressVideo,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",

  }
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
