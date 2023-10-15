import React from "react";
import ProfileImage from "../image/profile-img.jpg";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="profile-pic">
          <label>
            Chinedu<span>Booking</span>
          </label>
          <img src={ProfileImage} alt="profile-img" width={100} />
          Chinedu Nwachukwu
        </div>
        <div className="nav-links">
          <i className="bx bxs-home-alt-2 dashboard"> Dashboard</i>
          <i class="bx bx-buildings"> Explore City</i>
          <i class="bx bx-envelope"> Ticket</i>
          <i class="bx bx-heart"> Favourite</i>
          <i class="bx bx-cog"> Settings</i>
        </div>
        <div className="logout-btn">
          <i class="bx bxs-log-in-circle"> Logout</i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
