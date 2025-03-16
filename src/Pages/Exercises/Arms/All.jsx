import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ArmsImage from "../../../assets/images/arms12.png";
import "../../../css/beginner.css";

// Import arm exercise videos
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


import bb11 from "../../../assets/exercises/arm/eliteBiceps/hammerbenchcurls.mp4";
import bb12  from "../../../assets/exercises/arm/eliteBiceps/peachercurls1.mp4";
import bb13 from "../../../assets/exercises/arm/eliteBiceps/seateddumbellcurlsseatedposition.mp4";
import bb14 from "../../../assets/exercises/arm/eliteBiceps/spidercurls.mp4";


import tt11 from "../../../assets/exercises/arm/eliteTriceps/dipstricep.mp4";
import tt12  from "../../../assets/exercises/arm/eliteTriceps/tricep12.mp4";
import tt13 from "../../../assets/exercises/arm/eliteTriceps/tricep14.mp4";
import tt14 from "../../../assets/exercises/arm/eliteTriceps/tricepchest.mp4";

import f11 from "../../../assets/exercises/forearms/bicepbursts.mp4";
import f12  from "../../../assets/exercises/forearms/forearm.mp4";
import f13 from "../../../assets/exercises/forearms/forearm12.mp4";
import f14 from "../../../assets/exercises/forearms/seatedforearmsraises.mp4";

// Define Exercise Data
const allArmExercises = [
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
  {
    name: "Bench Curls",
    video: b11,
    targetMuscles: "Biceps, Forearms",

  },
  {
    name: "Bicep Curls",
    video: b12,
    targetMuscles: "Biceps, Forearms",
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
  {
    name: "Hammer Curls",
    video: bb11,
    targetMuscles: "Biceps, Forearms",
    },
  {
    name: "Hammer Curls",
    video: bb12,
    targetMuscles: "Biceps, Forearms",
  },
  {
    name: "Hammer Curls",
    video: bb13,
    targetMuscles: "Biceps, Forearms",
  },
  {
    name: "Hammer Curls",
    video: bb14,
    targetMuscles: "Biceps, Forearms",
  },
  {
    name: "Hammer Curls",
    video: tt11,
    targetMuscles: "Triceps, Shoulders, Chest",
  },
  {
    name: "Hammer Curls",
    video: tt12,
    targetMuscles: "Triceps, Shoulders, Chest",
  },
  {
    name: "Hammer Curls",
    video: tt13,
    targetMuscles: "Triceps, Shoulders, Chest",
  },
  {
    name: "Hammer Curls",
    video: tt14,
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
      <ExerciseCard exercises={allArmExercises} />
      <div>
        <Footer1 />
      </div>
    </div>
  );
};

export default All;
