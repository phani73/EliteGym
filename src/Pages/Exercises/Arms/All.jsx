import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
// import ExerciseCard from "../../../components/ExerciseCard";
import ArmsImage from "../../../assets/images/arms12.png";
import "../../../css/beginner.css";

// Import arm exercise videos
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

const All = () => {
  return (
    <div>
      <Button1 />
      <h1>Arms - All Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ArmsImage} alt="ArmImage"/>
      </div>
     </div>
      <p>Here are all exercises for arms.</p>
      {/* <ExerciseCard exercises={beginnerArmExercises} /> */}
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default All;
