import React, { useState, useEffect } from "react";
import Footer1 from "../components/Footer1";
import Button1 from "../components/Button1";
import Loader from "../components/Loader"; // Import Loader Component
import "../Styles/Payment.css";
import "../Styles/Diet.css";
import Diet1 from "../assets/images/diet/diet1.jpg";
import Diet2 from "../assets/images/diet/diet2.jpg";
import Diet3 from "../assets/images/diet/diet3.jpg";
import Diet4 from "../assets/images/diet/diet4.jpg";
import Diet5 from "../assets/images/diet/diet5.jpeg";
import Diet6 from "../assets/images/diet/diet6.jpg";
import Diet7 from "../assets/images/diet/diet7.jpg";
import Diet8 from "../assets/images/diet/diet8.jpg";
import Diet9 from "../assets/images/diet/diet9.jpg";

const Diet = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load time
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Loader disappears after 1.5s
  }, []);

  return (
    <div className="diet-container">
      {loading ? (
        <Loader /> // Show loader only while page is loading
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Diet;
