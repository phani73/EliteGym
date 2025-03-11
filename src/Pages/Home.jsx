import React,{useEffect} from "react";
import "../Styles/Home.css";
import Card from "../components/Card";
import Button1 from "../components/Button1";
import Footer1 from "../components/Footer1";
import { useLocation } from "react-router-dom";

// Import images properly
import ChestImage from "../assets/images/chest1.jpg";
import BackImage from "../assets/images/back1.jpg";
import LegsImage from "../assets/images/legs.jpg";
import ArmsImage from "../assets/images/arms.jpg";
import ShouldersImage from "../assets/images/shoulder123.jpg";
import ABS from "../assets/images/abs12.png";

const exercises = [
  { name: "Chest", image: ChestImage },
  { name: "Back", image: BackImage },
  { name: "Legs", image: LegsImage },
  { name: "Arms", image: ArmsImage },
  { name: "Shoulders", image: ShouldersImage },
  {name:"ABS",image:ABS},
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>List Of Muscles </h1>
      <div className="button-container">
        <Button1 />
      </div>

      {/* Wrapped the exercise list in a new div */}
      <div className="exercise-wrapper">
        <div className="exercise-list">
          {exercises.map((exercise, index) => (
            <Card key={index} name={exercise.name} image={exercise.image} />
          ))}
        </div>
      </div>

      <div className="footer">
        <Footer1 />
      </div>
    </div>
  );
};


export default Home;
