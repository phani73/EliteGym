import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import AbsImage from "../../../assets/images/abs12.jpg";
import "../../../css/beginner.css";

// // Import arm exercise videos
// import bicepCurlsVideo from "../../../assets/armVideos/bicepCurls.mp4";
// import tricepDipsVideo from "../../../assets/armVideos/tricepDips.mp4";
// import hammerCurlsVideo from "../../../assets/armVideos/hammerCurls.mp4";

// // Define Exercise Data
// const beginnerArmExercises = [
//   {
//     name: "Bicep Curls",
//     video: bicepCurlsVideo,
//     targetMuscles: "Biceps",
//   },
//   {
//     name: "Tricep Dips",
//     video: tricepDipsVideo,
//     targetMuscles: "Triceps, Shoulders, Chest",
//   },
//   {
//     name: "Hammer Curls",
//     video: hammerCurlsVideo,
//     targetMuscles: "Biceps, Forearms",
//   }
// ];

const Beginner = () => {
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
      {/* <ExerciseCard exercises={beginnerArmExercises} /> */}
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default Beginner;
