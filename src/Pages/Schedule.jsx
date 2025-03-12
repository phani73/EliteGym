import React, { useState, useEffect } from "react";
import Footer1 from "../components/Footer1";
import Button1 from "../components/Button1";
import Loader from "../components/Loader"; // Import Loader Component
import "../Styles/Payment.css";
import "../Styles/Diet.css";
import s1 from "../assets/images/schedule/s1.jpg";
import s2 from "../assets/images/schedule/s2.jpg";
import s3 from "../assets/images/schedule/s3.jpg";
import s4 from "../assets/images/schedule/s4.jpg";
import s5 from "../assets/images/schedule/s5.jpg";
import s6 from "../assets/images/schedule/s6.jpg";
import s7 from "../assets/images/schedule/s7.jpg";

const Schedule = () => {
  const [loading, setLoading] = useState(true);

  // Simulate page loading delay (e.g., fetching data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust time if needed (2s delay)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="diet-container">
      {loading ? (
        <Loader /> // Show loader while loading the page
      ) : (
        <>
          <Button1 />
          <h1>Some Schedule Plans</h1>
          
          <div className="diet-images-wrapper">
            {[s1, s2, s3, s4, s5, s6, s7].map((src, index) => (
              <div className="diet-image-container" key={index}>
                <img src={src} alt={`Plan ${index + 1}`} className="diet-image" />
              </div>
            ))}
          </div>

          <Footer1 />
        </>
      )}
    </div>
  );
};

export default Schedule;
