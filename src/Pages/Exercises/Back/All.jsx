import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import BackImage from "../../../assets/images/back12.jpeg";
import "../../../css/beginner.css";

// Import videos with names
import bb1 from "../../../assets/exercises/back/beginnerBack/chestbacklefts.mp4";
import bb2  from "../../../assets/exercises/back/beginnerBack/latpulldownback.mp4";
import bb3 from "../../../assets/exercises/back/beginnerBack/lowerback.mp4";
import bb4 from "../../../assets/exercises/back/beginnerBack/seatedtraps.mp4";
import bb5 from "../../../assets/exercises/back/beginnerBack/tbarrows.mp4";
import bb6 from "../../../assets/exercises/back/beginnerBack/b1.mp4";



import ib1 from "../../../assets/exercises/back/intermediateBack/backbacklats.mp4";
import ib2  from "../../../assets/exercises/back/intermediateBack/backrows.mp4";
import ib3 from "../../../assets/exercises/back/intermediateBack/biceppullups.mp4";
import ib4 from "../../../assets/exercises/back/intermediateBack/inclinelatsuppertarps.mp4";
import ib5 from "../../../assets/exercises/back/intermediateBack/lowerback.mp4";
import ib6 from "../../../assets/exercises/back/intermediateBack/traps.mp4";
import ib7 from "../../../assets/exercises/back/intermediateBack/b2.mp4";

import eb1 from "../../../assets/exercises/back/eliteBack/rosesdumbell.mp4";
import eb2  from "../../../assets/exercises/back/eliteBack/latsmachinerows.mp4";
import eb3 from "../../../assets/exercises/back/eliteBack/lowerback.mp4";
import eb4 from "../../../assets/exercises/back/eliteBack/widepullups.mp4";
import eb5 from "../../../assets/exercises/back/eliteBack/lowerback.mp4";
import eb6 from "../../../assets/exercises/back/eliteBack/deadlift.mp4";
import eb7 from "../../../assets/exercises/back/eliteBack/b3.mp4";

// Define Exercise Data
const allExercises = [
  {
    name: "Pull-Ups",
    video: bb1, 
    targetMuscles: "Lats, Biceps, Upper Back, Core",
  },
  {
    name: "Bent-Over Rows",
    video: bb2,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Lat Pulldown",
    video: bb3,
    targetMuscles: "Lats, Upper Back, Biceps",
  },
  {
    name: "Seated Cable Rows",
    video: bb4,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "T-Bar Rows",
    video: bb5,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Deadlifts",
    video: bb6,
    targetMuscles: "Lower Back, Hamstrings, Glutes, Core",
  },
  {
    name: "Pull-Ups",
    video: ib1, 
    targetMuscles: "Lats, Biceps, Upper Back, Core",
  },
  {
    name: "Bent-Over Rows",
    video: ib2,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Lat Pulldown",
    video: ib3,
    targetMuscles: "Lats, Upper Back, Biceps",
  },
  {
    name: "Incline Dumbbell Rows",
    video: ib4,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Seated Cable Rows",
    video: ib5,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Deadlifts",
    video: ib6,
    targetMuscles: "Hamstrings, Glutes, Lower Back, Core",
  },
  {
    name: "Chin-Ups",
    video: ib7,
    targetMuscles: "Biceps, Upper Back, Core",
  },
  {
    name: "Pull-Ups",
    video: eb1, 
    targetMuscles: "Lats, Biceps, Upper Back, Core",
  },
  {
    name: "Bent-Over Rows",
    video: eb2,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Lat Pulldown",
    video: eb3,
    targetMuscles: "Lats, Upper Back, Biceps",
  },
  {
    name: "T-Bar Rows",
    video: eb4,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Seated Cable Rows",
    video: eb5,
    targetMuscles: "Middle Back, Lats, Rear Delts, Biceps",
  },
  {
    name: "Deadlifts",
    video: eb6,
    targetMuscles: "Lower Back, Hamstrings, Glutes, Core",
  },
  {
    name: "Chin-Ups",
    video: eb7,
    targetMuscles: "Lats, Biceps, Upper Back, Core",
  },
];

const All = () => {
  return (
    <div>
   <Button1/>
      <h1>Back - All Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={BackImage} alt="BackImage"/>
      </div>
     </div>
      <p>Here are some all exercises for back.</p>
      <ExerciseCard exercises={allExercises} />
      <div>
        <Footer1></Footer1>
      </div>
    </div>
  );
};

export default All;
