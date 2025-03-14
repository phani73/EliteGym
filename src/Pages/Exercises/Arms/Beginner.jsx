import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ArmsImage from "../../../assets/images/arms12.png";
import "../../../css/beginner.css";

// // Import arm exercise videos
import b1 from "../../../assets/exercises/arm/beginnerbicep/bicepcurl.mp4";
import b2  from "../../../assets/exercises/arm/beginnerbicep/bicepcurls.mp4";
import b3 from "../../../assets/exercises/arm/beginnerbicep/concentrationcurks.mp4";
import b4 from "../../../assets/exercises/arm/beginnerbicep/curlroddumbellcurls.mp4";
import b5 from "../../../assets/exercises/arm/beginnerbicep/hammercurls.mp4";

import t1 from "../../../assets/exercises/arm/beginnertricep/diamondpushups.mp4";
import t2  from "../../../assets/exercises/arm/beginnertricep/skullcrushes.mp4";
import t3 from "../../../assets/exercises/arm/beginnertricep/tricep1.mp4";
import t4 from "../../../assets/exercises/arm/beginnertricep/tricep2.mp4";
import t5 from "../../../assets/exercises/arm/beginnertricep/tricep13.mp4";
import t6 from "../../../assets/exercises/arm/beginnertricep/tricep.mp4";

// // Define Exercise Data
const beginnerArmExercises = [
  {
    name: "Bicep Curls",
    video: b1,
    targetMuscles: "Biceps",
  },
  {
    name: "Tricep Dips",
    video: b2,
    targetMuscles: "Triceps, Shoulders, Chest",
  },
  {
    name: "Hammer Curls",
    video: b3,
    targetMuscles: "Biceps, Forearms",
  },
  {
    name: "Diamond Push-Ups",
    video: b4,
    targetMuscles: "Triceps, Chest, Shoulders",
  },
  {
    name: "Skull Crushers",
    video: b5,
    targetMuscles: "Triceps",
  },
  {
    name: "Cable Curls",
    video: t1,
    targetMuscles: "Biceps",
  },
  {
    name: "Cable Rope Pushdowns",
    video: t2,
    targetMuscles: "Triceps",
  },
  {
    name: "Dumbbell Bicep Curls",
    video: t3,
    targetMuscles: "Biceps",
  },  
  {
    name: "Dumbbell Tricep Extensions",
    video: t4,
    targetMuscles: "Triceps",
  },
  {
    name: "Dumbbell Hammer Curls",
    video: t5,
    targetMuscles: "Biceps, Forearms",
  },
  {
    name: "Dumbbell Skull Crushers",
    video: t6,
    targetMuscles: "Triceps",
  },

];

const Beginner = () => {
  return (
    <div>
      <Button1 />
      <h1>Arms - Beginner Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ArmsImage} alt="ArmImage"/>
      </div>
     </div>
      <p>Here are some beginner exercises for arms.</p>
      <ExerciseCard exercises={beginnerArmExercises} />
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default Beginner;
