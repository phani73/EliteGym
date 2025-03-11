import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ShouldersImage from "../../../assets/images/shoulder12.png";
import "../../../css/beginner.css";

// Import leg exercise videos
// import squatsVideo from "../../../assets/legVideos/squats.mp4";
// import lungesVideo from "../../../assets/legVideos/lunges.mp4";
// import calfRaisesVideo from "../../../assets/legVideos/calfRaises.mp4";

// // Define Exercise Data
// const beginnerLegExercises = [
//   {
//     name: "Squats",
//     video: squatsVideo,
//     targetMuscles: "Quadriceps, Hamstrings, Glutes, Core",
//   },
//   {
//     name: "Lunges",
//     video: lungesVideo,
//     targetMuscles: "Quadriceps, Hamstrings, Glutes, Calves",
//   },
//   {
//     name: "Calf Raises",
//     video: calfRaisesVideo,
//     targetMuscles: "Calves",
//   }
// ];

const Beginner = () => {
  return (
    <div>
     <Button1/>
      <h1>Shoulder- Beginner Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ShouldersImage} alt="ArmImage"/>
      </div>
     </div>
      <p>Here are some beginner exercises for legs.</p>
      {/* <ExerciseCard exercises={beginnerLegExercises} /> */}
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default Beginner;
