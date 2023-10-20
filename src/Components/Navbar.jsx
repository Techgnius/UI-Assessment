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
          <div className="profile-img-section">
            <img src={ProfileImage} alt="profile-img" width={100} />
            <i class="bx bx-edit"></i>
          </div>
          <p>Chinedu Nwachukwu</p>
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
