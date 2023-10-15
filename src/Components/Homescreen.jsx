import React from "react";

const Homescreen = () => {
  return (
    <>
      <div className="homescreen-container">
        <div className="homescreen"></div>
        <div className="trip-details">
          <div className="trip-detail">
            <i class="fa-solid fa-location-dot"></i>
            <select>
              <option value="">Where are you going?</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          <div className="line"></div>
          <div className="trip-detail">
            <i className="bx bxs-calendar"></i>
            <select>
              <option value="">Check-In Date</option>
              <option value="January">January</option>
              <option value="March">March</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="October">October</option>
            </select>
          </div>
          <div className="line"></div>
          <div className="trip-detail">
            <i class="fa-regular fa-user"></i>
            <select>
              <option value="">3 Adults</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homescreen;
