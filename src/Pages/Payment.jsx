import React, { useState, useEffect } from "react";
import Card1 from "../components/Card1";
import Footer1 from "../components/Footer1";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import Loader from "../components/Loader"; // Import Loader Component
import "../Styles/Payment.css";

const Payment = () => {
  const [loading, setLoading] = useState(true);

  // Simulate page loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="payment-container">
      {loading ? (
        <Loader /> // Show loader while loading the page
      ) : (
        <>
          <h1>Payment</h1>
          <div className="content">
            <Button1 />
            <div className="scroll-text">
              🔔 The first payment will cost an advance of 200.. Thank you! 💳  
            </div>

            <Card1 title="Strength Training Only – 3 Months (No Cardio)" cost="2000" />
            <Card1 title="1-Month Membership – Strength Training Only" cost="800" />
            <Card1 title="1-Month Full Access – Cardio + Strength Training" cost="1400" />
            <Card1 title="3-Month Premium – Cardio & Strength Training" cost="3000" />
            <Card1 title="3-Month Exclusive – Strength Training Only" cost="2000" />
            <Card1 title="Guest Pass (Per Day) – Full Access: Cardio & Strength" cost="80" />
            <Card1 title="Guest Pass (Per Day) – Strength Training Only" cost="40" />

            <Button2 />
            <Footer1 />
          </div>
        </>
      )}
    </div>
  );
};

export default Payment;
