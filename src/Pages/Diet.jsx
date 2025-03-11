import React from "react";
import Footer1 from "../components/Footer1";
import Button1 from "../components/Button1";
import "../Styles/Payment.css";
import "../Styles/Diet.css";
import Diet1 from "../assets/images/diet/diet1.jpg";
import Diet2 from "../assets/images/diet/diet2.jpg";
import Diet3 from "../assets/images/diet/diet3.jpg";
import Diet4 from "../assets/images/diet/diet4.jpg";
import Diet5 from "../assets/images/diet/diet5.jpeg";
import Diet6 from "../assets/images/diet/diet6.jpg"
import Diet7 from "../assets/images/diet/diet7.jpg"
import Diet8 from "../assets/images/diet/diet8.jpg"
import Diet9 from "../assets/images/diet/diet9.jpg"
const Diet = () => {
  return (
    <div className="diet-container">
      <Button1 />
      <h1>Some Diet Plans and Diet Options</h1>
      
      <div className="diet-images-wrapper">
        <div className="diet-image-container">
          <img src={Diet1} alt="Diet Plan 1" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={Diet2} alt="Diet Plan 2" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={Diet3} alt="Diet Plan 3" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={Diet4} alt="Diet Plan 4" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={Diet5} alt="Diet Plan 5" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={Diet6} alt="Diet Plan 6" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={Diet7} alt="Diet Plan 7" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={Diet8} alt="Diet Plan 8" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={Diet9} alt="Diet Plan 9" className="diet-image" />
        </div>
      </div>

      <Footer1 />
    </div>
  );
};


export default Diet;
