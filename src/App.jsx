import React from "react";
import Navbar from "./Components/Navbar";
import Booking from "./Components/Booking";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="booking-page">
          <Booking />
        </div>
      </div>
    </>
  );
};

export default App;
