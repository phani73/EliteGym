import React from "react";
import Button1 from "../../../components/Button1";
import Footer1 from "../../../components/Footer1";
import ExerciseCard from "../../../components/ExerciseCard";
import ChestImage from "../../../assets/images/chest12.jpeg";
import "../../../css/beginner.css";
const Elite = () => {
  return (
    <div>
         <Button1 />
      <h1>Chest - Elite Exercises</h1>
      <div className="diet-images-wrapper">
      <div className="diet-image-container">
      <img src={ChestImage} alt="ChestImage"/>
      </div>
     </div>
      <p>Here are some elite-level exercises for chest.</p>
      <ul>
        <li>Weighted Dips</li>
        <li>Decline Bench Press</li>
        <li>Explosive Push-Ups</li>
      </ul>
      <div>
        <Footer1></Footer1>
      </div>
    </div>
    
  );
};

export default Elite;
