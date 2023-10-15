import React from "react";
import Indialocation from "../image/India.jpg";
import Uklocation from "../image/France.jpg";
import Francelocation from "../image/United Kingdom.jpg";
import Offer1 from "../image/luxury1.jpg";
import Offer2 from "../image/luxury2.jpg";
import Offer3 from "../image/luxury3.jpg";
import Offer4 from "../image/luxury5.jpg";

const TravelPackages = () => {
  return (
    <>
      <div className="packages-container">
        <div className="locations">
          <h1>Trending Destinations</h1>
          <div className="locationCard-container">
            <div className="locationCard">
              <img src={Indialocation} alt="location 1" width={140} />
              <div className="location-details">
                <p>Bangladesh, India</p>
                <p>Visiting the best tourist areas chosen be the audience</p>
                <span>$440,000</span>
              </div>
              <i class="fa-solid fa-star">4/5</i>
            </div>
            <div className="locationCard">
              <img src={Uklocation} alt="location 1" width={140} />
              <div className="location-details">
                <p>London, United Kingdom</p>
                <p>London is one of the most beautiful places to visit</p>
                <span>$500,000</span>
              </div>
              <i class="fa-solid fa-star">5/5</i>
            </div>
            <div className="locationCard">
              <img src={Francelocation} alt="location 1" width={140} />
              <div className="location-details">
                <p>Paris, France</p>
                <p>One of our best tourist attractions</p>
                <span>$440,000</span>
              </div>
              <i class="fa-solid fa-star">4/5</i>
            </div>
          </div>
          <h1>Best Offers</h1>
          <div className="offer-container">
            <div className="offer-card">
              <img src={Offer1} alt="luxury" width={220} />
              <p>7Seasons Apartment</p>
              <i class="fa-solid fa-location-dot">Lekki/Lagos</i>
              <div className="price">
                <span>$50,00/Night</span>
                <i className="bx bx-heart"></i>
              </div>
            </div>
            <div className="offer-card">
              <img src={Offer2} alt="luxury" width={220} />
              <p>7Seasons Apartment</p>
              <i class="fa-solid fa-location-dot"> Lekki/Lagos</i>
              <div className="price">
                <span>$50,00/Night</span>
                <i className="bx bx-heart"></i>
              </div>
            </div>
            <div className="offer-card">
              <img src={Offer3} alt="luxury" width={220} />
              <p>7Seasons Apartment</p>
              <i class="fa-solid fa-location-dot"> Lekki/Lagos</i>
              <div className="price">
                <span>$50,00/Night</span>
                <i className="bx bx-heart"></i>
              </div>
            </div>
            <div className="offer-card">
              <img src={Offer4} alt="luxury" width={220} />
              <p>7Seasons Apartment</p>
              <i class="fa-solid fa-location-dot"> Lekki/Lagos</i>
              <div className="price">
                <span>$50,00/Night</span>
                <i className="bx bx-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelPackages;
