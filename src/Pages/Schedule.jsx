import React from "react";
import Footer1 from "../components/Footer1";
import Button1 from "../components/Button1";
import "../Styles/Payment.css";
import "../Styles/Diet.css";
import s1 from "../assets/images/schedule/s1.jpg";
import s2 from "../assets/images/schedule/s2.jpg";
import s3 from "../assets/images/schedule/s3.jpg";
import s4 from "../assets/images/schedule/s4.jpg";
import s5 from "../assets/images/schedule/s5.jpg";
import s6 from "../assets/images/schedule/s6.jpg";
import s7 from "../assets/images/schedule/s7.jpg";


const Diet = () => {
  return (
    <div className="diet-container">
      <Button1 />
      <h1>Some Schedule Plans</h1>
      
      <div className="diet-images-wrapper">
        <div className="diet-image-container">
          <img src={s1} alt="Plan 1" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={s2} alt="Plan 2" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={s3} alt="Plan 3" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={s4} alt="Plan 4" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={s5} alt="Plan 5" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={s6} alt="Plan 6" className="diet-image" />
        </div>
        <div className="diet-image-container">
          <img src={s7} alt="Plan 7" className="diet-image" />
        </div>    
      </div>

      <Footer1 />
    </div>
  );
};


export default Diet;
