import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ChestImage from "../../../assets/images/chest12.jpeg";
import "../../../css/beginner.css";

import bc1 from "../../../assets/exercises/chest/beginner/chestpressmachine.mp4";
import bc2  from "../../../assets/exercises/chest/beginner/chestpressmachine12.mp4";
import bc3 from "../../../assets/exercises/chest/beginner/flatbenchpress.mp4";
import bc4 from "../../../assets/exercises/chest/beginner/inclinepushups.mp4";
import bc5 from "../../../assets/exercises/chest/beginner/pushuos.mp4";
import bc6 from "../../../assets/exercises/chest/beginner/b1.mp4";

import ic1 from "../../../assets/exercises/chest/intermediate/flatdumbellpres.mp4";
import ic2 from "../../../assets/exercises/chest/intermediate/flies.mp4";
import ic3 from "../../../assets/exercises/chest/intermediate/incline1.mp4";
import ic4 from "../../../assets/exercises/chest/intermediate/lowerchestdumbelpress.mp4";
import ic5 from "../../../assets/exercises/chest/intermediate/chest121.mp4";
import ic6 from "../../../assets/exercises/chest/intermediate/chestdumbellpress.mp4";



import ec1 from "../../../assets/exercises/chest/elite/chestbacklatslowerbench.mp4";
import ec2 from "../../../assets/exercises/chest/elite/chestflysmachine.mp4";
import ec3 from "../../../assets/exercises/chest/elite/verticalchest.mp4";
import ec4 from "../../../assets/exercises/chest/elite/c1.mp4";
import ec5 from "../../../assets/exercises/chest/elite/c2.mp4";
import ec6 from "../../../assets/exercises/chest/elite/chestinclinemidchest.mp4";

const allExercises = [
  {
    name: "Push-Ups",
    video: bc1, 
    targetMuscles:"chest muscles (pectoralis major), triceps, and the anterior deltoids (front of the shoulders)",
  },


  {
    name: "Incline Dumbbell Press",
    video: bc2,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",

  },
  {
    name: "Flat Bench Press",
    video: bc3,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
  {
    name: "Incline Push-Ups",
    video: bc4,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",
  },
  {
    name: "Push-Ups with Feet Elevated",
    video: bc5,
    targetMuscles: "Chest, Triceps, Shoulders",
  }, 
  {
    name: "Chest Press (Light Weight)",
    video: bc6,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
  {
    name: "Push-Ups",
    video: ic1, 
    targetMuscles:"chest muscles (pectoralis major), triceps, and the anterior deltoids (front of the shoulders)",
  },


  {
    name: "Incline Dumbbell Press",
    video: ic2,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",

  },
  {
    name: "Flat Bench Press",
    video: ic3,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
  {
    name: "Incline Push-Ups",
    video: ic4,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",
  },
  {
    name: "Push-Ups with Feet Elevated",
    video: ic5,
    targetMuscles: "Chest, Triceps, Shoulders",
  }, 
  {
    name: "Chest Press (Light Weight)",
    video: ic6,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
  {
    name: "Push-Ups",
    video: ec1, 
    targetMuscles:"chest muscles (pectoralis major), triceps, and the anterior deltoids (front of the shoulders)",
  },


  {
    name: "Incline Dumbbell Press",
    video: ec2,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",

  },
  {
    name: "Flat Bench Press",
    video: ec3,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
  {
    name: "Incline Push-Ups",
    video: ec4,
    targetMuscles: "Upper Chest, Front Shoulders, Triceps",
  },
  {
    name: "Push-Ups with Feet Elevated",
    video: ec5,
    targetMuscles: "Chest, Triceps, Shoulders",
  }, 
  {
    name: "Chest Press (Light Weight)",
    video: ec6,
    targetMuscles: "Chest, Triceps, Shoulders",
  },
 
];
const All = () => {
  return (
    <div>
       <Button1 />
      <h1>Chest - All Levels</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ChestImage} alt="ChestImage"/>
      </div>
     </div>
      <p>Here are all exercises for chest from beginner to elite.</p>
      <ExerciseCard exercises={allExercises} />
      <div>
        <Footer1></Footer1>
      </div>
    </div>
  );
};

export default All;
