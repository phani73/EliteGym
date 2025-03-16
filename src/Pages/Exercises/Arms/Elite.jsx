import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ArmsImage from "../../../assets/images/arms12.png";
import "../../../css/beginner.css";

// Import arm exercise videos
import b11 from "../../../assets/exercises/arm/eliteBiceps/hammerbenchcurls.mp4";
import b12  from "../../../assets/exercises/arm/eliteBiceps/peachercurls1.mp4";
import b13 from "../../../assets/exercises/arm/eliteBiceps/seateddumbellcurlsseatedposition.mp4";
import b14 from "../../../assets/exercises/arm/eliteBiceps/spidercurls.mp4";


import t11 from "../../../assets/exercises/arm/eliteTriceps/dipstricep.mp4";
import t12  from "../../../assets/exercises/arm/eliteTriceps/tricep12.mp4";
import t13 from "../../../assets/exercises/arm/eliteTriceps/tricep14.mp4";
import t14 from "../../../assets/exercises/arm/eliteTriceps/tricepchest.mp4";

import f11 from "../../../assets/exercises/forearms/bicepbursts.mp4";
import f12  from "../../../assets/exercises/forearms/forearm.mp4";
import f13 from "../../../assets/exercises/forearms/forearm12.mp4";
import f14 from "../../../assets/exercises/forearms/seatedforearmsraises.mp4";

// // Define Exercise Data
const eliteArmExercises = [
{
  name: "Hammer Curls",
  video: b11,
  targetMuscles: "Biceps, Forearms",
},
{
  name: "Hammer Curls",
  video: b12,
  targetMuscles: "Biceps, Forearms",
},
{
  name: "Hammer Curls",
  video: b13,
  targetMuscles: "Biceps, Forearms",
},
{
  name: "Hammer Curls",
  video: b14,
  targetMuscles: "Biceps, Forearms",
},
{
  name: "Hammer Curls",
  video: t11,
  targetMuscles: "Triceps, Shoulders, Chest",
},
{
  name: "Hammer Curls",
  video: t12,
  targetMuscles: "Triceps, Shoulders, Chest",
},
{
  name: "Hammer Curls",
  video: t13,
  targetMuscles: "Triceps, Shoulders, Chest",
},
{
  name: "Hammer Curls",
  video: t14,
  targetMuscles: "Triceps, Shoulders, Chest",
},
{
  name: "Hammer Curls",
  video: f11,
  targetMuscles: "Biceps, Forearms",
},
{
  name: "Hammer Curls",
  video: f12,
  targetMuscles: "Biceps, Forearms",
},
{
  name: "Hammer Curls",
  video: f13,
  targetMuscles: "Biceps, Forearms",
},
{
  name: "Hammer Curls",
  video: f14,
  targetMuscles: "Biceps, Forearms",
},
];

const Elite = () => {
  return (
    <div>
      <Button1 />
      <h1>Arms - Elite Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ArmsImage} alt="ArmImage"/>
      </div>
     </div>
      <p>Here are some elite exercises for arms.</p>
      <ExerciseCard exercises={eliteArmExercises} />
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default Elite;
