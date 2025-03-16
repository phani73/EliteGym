import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ArmsImage from "../../../assets/images/arms12.png";
import "../../../css/beginner.css";

// Import arm exercise videos
import b11 from "../../../assets/exercises/arm/intermidiateBicep/benchcurls.mp4";
import b12  from "../../../assets/exercises/arm/intermidiateBicep/bicepsrodcurls.mp4";
import b13 from "../../../assets/exercises/arm/intermidiateBicep/concentrationcurls1.mp4";
import b14 from "../../../assets/exercises/arm/intermidiateBicep/poscurls.mp4";
import b15 from "../../../assets/exercises/arm/intermidiateBicep/s1.mp4";
import b16 from "../../../assets/exercises/arm/intermidiateBicep/seatedrodcurl.mp4";
import b17 from "../../../assets/exercises/arm/intermidiateBicep/rodcurl.mp4";


import t11 from "../../../assets/exercises/arm/intermidiateTriceps/t12.mp4";
import t12  from "../../../assets/exercises/arm/intermidiateTriceps/seactedskullcrnches.mp4";
import t13 from "../../../assets/exercises/arm/intermidiateTriceps/singlehandtricep.mp4";
import t14 from "../../../assets/exercises/arm/intermidiateTriceps/skullcrushesdumbell.mp4";
import t15 from "../../../assets/exercises/arm/intermidiateTriceps/skullcrushesincline.mp4";

// // Define Exercise Data
const intermediateArmExercises = [
  {
    name: "Bench Curls",
    video: b11,
    targetMuscles: "Biceps",
  },
  {
    name: "Bicep Curls",
    video: b12,
    targetMuscles: "Biceps",
  },
  {
    name: "Tricep Dips",
    video: b12,
    targetMuscles: "Triceps, Shoulders, Chest",
  },
  {
    name: "Hammer Curls",
    video: b13,
    targetMuscles: "Biceps, Forearms",
  },
  {
    name: "Cable Rope Pushdowns",
    video: b14,
    targetMuscles: "Triceps",
  },
  {
    name: "Dumbbell Rows",
    video: b15,
    targetMuscles: "Back, Biceps",
  },
  {
    name: "Lateral Raises",
    video: b16,
    targetMuscles: "Shoulders",
  },
  {
    name: "Skull Crushers",
    video: b17,
    targetMuscles: "Triceps",
  },
  {
    name: "Cable Curls",
    video: t11,
    targetMuscles: "Biceps",
  },
  {
    name: "Incline Dumbbell Curls",
    video: t12,
    targetMuscles: "Biceps",
  },

  {
    name: "Concentration Curls",
    video: t13,
    targetMuscles: "Biceps",
  },

  {
    name: "Preacher Curls",
    video: t14,
    targetMuscles: "Biceps",
  },


  {
    name: "Seated Dumbbell Hammer Curls",
    video: t15,
    targetMuscles: "Biceps, Forearms",
  },
  
];

const Intermediate = () => {
  return (
    <div>
      <Button1 />
      <h1>Arms - Intermediate Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ArmsImage} alt="ArmImage"/>
      </div>
     </div>
      <p>Here are some Intermediate exercises for arms.</p>
      <ExerciseCard exercises={intermediateArmExercises} />
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default Intermediate;
