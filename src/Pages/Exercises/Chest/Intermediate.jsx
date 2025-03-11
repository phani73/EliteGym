import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ChestImage from "../../../assets/images/chest12.jpeg";
import "../../../css/beginner.css";

const Intermediate = () => {
  return (
    <div>
      <Button1/>
      <h1>Chest - Intermediate Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ChestImage} alt="ChestImage"/>
      </div>
     </div>
      <p>Here are some intermediate exercises for chest.</p>
      <ul>
        <li>Bench Press</li>
        <li>Dumbbell Flys</li>
        <li>Cable Crossovers</li>
      </ul>
      <div>
        <Footer1></Footer1>
      </div>
    </div>
  );
};

export default Intermediate;
