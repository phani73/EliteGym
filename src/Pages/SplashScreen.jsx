import React, { useEffect, useState } from "react";
import "../Styles/SplashScreen.css"; // ✅ Import CSS

const SplashScreen = ({ onFinish }) => {
  const eliteStart = "/elitestart.mp4"; // ✅ Correct path for public folder

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="splash-container">
      <video
        autoPlay
        muted
        playsInline
        webkit-playsinline="true" // ✅ Fixes the warning
        className="splash-video"
        onEnded={() => setIsVisible(false)}
      >
        <source src={eliteStart} type="video/mp4" />
      </video>
    </div>
  );
};

export default SplashScreen;
