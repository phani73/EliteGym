import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Payment from "./Pages/Payment";
import Schedule from "./Pages/Schedule";
import Diet from "./Pages/Diet";
import Contact from './Pages/Contact';
import DesktopMessage from "./Pages/DesktopMessage";
import ExercisePage from "./Pages/ExcercisePage";
import LevelPage from "./Pages/LevelPage";
import SplashScreen from "./Pages/SplashScreen"; 

// Chest Pages
import BeginnerChest from "./Pages/Exercises/Chest/Beginner";
import IntermediateChest from "./Pages/Exercises/Chest/Intermediate";
import EliteChest from "./Pages/Exercises/Chest/Elite";
import AllChest from "./Pages/Exercises/Chest/All";

// Back Pages
import BeginnerBack from "./Pages/Exercises/Back/Beginner";
import IntermediateBack from "./Pages/Exercises/Back/Intermediate";
import EliteBack from "./Pages/Exercises/Back/Elite";
import AllBack from "./Pages/Exercises/Back/All";

// Shoulder Pages
import BeginnerShoulder from "./Pages/Exercises/Shoulders/Beginner";
import IntermediateShoulder from "./Pages/Exercises/Shoulders/Intermediate";
import EliteShoulder from "./Pages/Exercises/Shoulders/Elite";
import AllShoulder from "./Pages/Exercises/Shoulders/All";

// Arms Pages
import BeginnerArms from "./Pages/Exercises/Arms/Beginner";
import IntermediateArms from "./Pages/Exercises/Arms/Intermediate";
import EliteArms from "./Pages/Exercises/Arms/Elite";
import AllArms from "./Pages/Exercises/Arms/All";

// Legs Pages
import BeginnerLegs from "./Pages/Exercises/Legs/Beginner";
import IntermediateLegs from "./Pages/Exercises/Legs/Intermediate";
import EliteLegs from "./Pages/Exercises/Legs/Elite";
import AllLegs from "./Pages/Exercises/Legs/All";

// Abs Pages
import BeginnerAbs from "./Pages/Exercises/Abs/Beginner";
import IntermediateAbs from "./Pages/Exercises/Abs/Intermediate";
import EliteAbs from "./Pages/Exercises/Abs/Elite";
import AllAbs from "./Pages/Exercises/Abs/All";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showSplash, setShowSplash] = useState(
    isMobile && !sessionStorage.getItem("splashShown") // ❗ Only show if not seen before
  );

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("splashShown", "true"); // ✅ Store flag in sessionStorage
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  if (!isMobile) {
    return <DesktopMessage />; // 🚫 Directly show message for desktop users
  }

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      {isMobile ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exercise/:exerciseName" element={<ExercisePage />} />
          <Route path="/exercise/:exerciseName/:level" element={<LevelPage />} />

          {/* Chest Routes */}
          <Route path="/exercise/chest/beginner" element={<BeginnerChest />} />
          <Route path="/exercise/chest/intermediate" element={<IntermediateChest />} />
          <Route path="/exercise/chest/elite" element={<EliteChest />} />
          <Route path="/exercise/chest/all" element={<AllChest />} />

          {/* Back Routes */}
          <Route path="/exercise/back/beginner" element={<BeginnerBack />} />
          <Route path="/exercise/back/intermediate" element={<IntermediateBack />} />
          <Route path="/exercise/back/elite" element={<EliteBack />} />
          <Route path="/exercise/back/all" element={<AllBack />} />

          {/* Shoulder Routes */}
          <Route path="/exercise/shoulders/beginner" element={<BeginnerShoulder/>}/>
          <Route path="/exercise/shoulders/intermediate" element={<IntermediateShoulder />} />
          <Route path="/exercise/shoulders/elite" element={<EliteShoulder />} />
          <Route path="/exercise/shoulders/all" element={<AllShoulder />} />

          {/* Arms Routes */}
          <Route path="/exercise/arms/beginner" element={<BeginnerArms />} />
          <Route path="/exercise/arms/intermediate" element={<IntermediateArms />} />
          <Route path="/exercise/arms/elite" element={<EliteArms />} />
          <Route path="/exercise/arms/all" element={<AllArms />} />

          {/* Legs Routes */}
          <Route path="/exercise/legs/beginner" element={<BeginnerLegs/>} />
          <Route path="/exercise/legs/intermediate" element={<IntermediateLegs />} />
          <Route path="/exercise/legs/elite" element={<EliteLegs />} />
          <Route path="/exercise/legs/all" element={<AllLegs />} />

          <Route path="/exercise/abs/beginner" element={<BeginnerAbs/>} />
          <Route path="/exercise/abs/intermediate" element={<IntermediateAbs/>} />
          <Route path="/exercise/abs/elite" element={<EliteAbs/>} />
          <Route path="/exercise/abs/all" element={<AllAbs/>} />
        </Routes>
      ) : (
        <DesktopMessage /> // Show message if not on mobile
      )}
    </Router>
  );
};

export default App;
