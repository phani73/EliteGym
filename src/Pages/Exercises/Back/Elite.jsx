import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import BackImage from "../../../assets/images/back12.jpeg";
import "../../../css/beginner.css";

// Import videos with names
// import pullupsVideo from "../../../assets/backVideos/pullups.mp4";
// import bentOverRowVideo from "../../../assets/backVideos/bentOverRow.mp4";
// import latPulldownVideo from "../../../assets/backVideos/latPulldown.mp4";

// Define Exercise Data
// const beginnerExercises = [
//   {
//     name: "Pull-Ups",
//     video: pullupsVideo, 
//     targetMuscles: "Lats, Biceps, Upper Back, Core",
//   },
//   {
//     name: "Bent-Over Rows",
//     video: bentOverRowVideo,
//     targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
//   },
//   {
//     name: "Lat Pulldown",
//     video: latPulldownVideo,
//     targetMuscles: "Lats, Upper Back, Biceps",
//   }
// ];

const Elite = () => {
  return (
    <div>
   <Button1/>
      <h1>Back - Elite Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={BackImage} alt="BackImage"/>
      </div>
     </div>
      <p>Here are some beginner exercises for back.</p>
      {/* <ExerciseCard exercises={beginnerExercises} /> */}
      <div>
        <Footer1></Footer1>
      </div>
    </div>
  );
};

export default Elite;
