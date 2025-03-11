import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ShouldersImage from "../../../assets/images/shoulder12.png";
import "../../../css/beginner.css";

// Import shoulder videos
// import shoulderPressVideo from "../../../assets/shoulderVideos/shoulderPress.mp4";
// import lateralRaisesVideo from "../../../assets/shoulderVideos/lateralRaises.mp4";
// import frontRaisesVideo from "../../../assets/shoulderVideos/frontRaises.mp4";

// // Define Exercise Data
// const beginnerShoulderExercises = [
//   {
//     name: "Shoulder Press",
//     video: shoulderPressVideo, 
//     targetMuscles: "Front Delts, Triceps, Upper Chest",
//   },
//   {
//     name: "Lateral Raises",
//     video: lateralRaisesVideo,
//     targetMuscles: "Side Delts, Traps",
//   },
//   {
//     name: "Front Raises",
//     video: frontRaisesVideo,
//     targetMuscles: "Front Delts, Upper Chest",
//   }
// ];

const Intermediate = () => {
  return (
    <div>
      <Button1 />
      <h1>Shoulders - Intermediate Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ShouldersImage} alt="ArmImage"/>
      </div>
     </div>
      <p>Here are some Intermediate exercises for shoulders.</p>
      {/* <ExerciseCard exercises={beginnerShoulderExercises} /> */}
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default Intermediate;
