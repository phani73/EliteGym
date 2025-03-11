import React from "react";
import "../Styles/Home.css";
import Card from "../components/Card";
import Button from "../components/Button";
import Footer from "../components/Footer";

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
      <div className="button-container">
        <Button />
      </div>

      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <Card key={index} name={exercise.name} image={exercise.image} />
        ))}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
