import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Indialocation from "../image/India.jpg";
import Uklocation from "../image/France.jpg";
import Mexicolocation from "../image/mexico.jpg";
import Lagoslocation from "../image/lagos.jpg";
import Italianlocation from "../image/Italy.jpg";
import Jamaicanlocation from "../image/Jamaica.jpg";

import Offer1 from "../image/luxury1.jpg";
import Offer2 from "../image/luxury2.jpg";
import Offer3 from "../image/luxury3.jpg";
import Offer4 from "../image/luxury5.jpg";

const TravelPackages = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="packages-container">
        <h1>Trending Destinations</h1>
        <Carousel responsive={responsive}>
          <div className="locationCard">
            <img src={Indialocation} alt="location 1" width={170} />
            <div className="location-details">
              <p className="location-name">Bangladesh, India</p>
              <p>Visiting the best tourist areas chosen be the audience</p>
              <span>$440,000</span>
            </div>
            <i class="fa-solid fa-star">4/5</i>
          </div>
          <div className="locationCard">
            <img src={Lagoslocation} alt="location 1" width={170} />
            <div className="location-details">
              <p className="location-name">Lagos, Nigeria.</p>
              <p>Discover the deliciousness of Nigerian jollof...</p>
              <span>$440,000</span>
            </div>
            <i class="fa-solid fa-star">4/5</i>
          </div>
          <div className="locationCard">
            <img src={Uklocation} alt="location 1" width={170} />
            <div className="location-details">
              <p className="location-name">London, United Kingdom</p>
              <p>London is one of the most beautiful places to visit</p>
              <span>$500,000</span>
            </div>
            <i class="fa-solid fa-star">5/5</i>
          </div>
          <div className="locationCard">
            <img src={Mexicolocation} alt="location 1" width={170} />
            <div className="location-details">
              <p className="location-name">Oaxaca, Mexico.</p>
              <p>
                One of our best tourist attractions. Get ready to get value for
                your money by experiencing unbelievable things.
              </p>
              <span>$440,000</span>
            </div>
            <i class="fa-solid fa-star">4/5</i>
          </div>
          <div className="locationCard">
            <img src={Italianlocation} alt="location 1" width={170} />
            <div className="location-details">
              <p className="location-name">New York, U.S.A</p>
              <p>
                One of our best tourist attractions. Get ready to get value for
                your money by experiencing unbelievable things.
              </p>
              <span>$440,000</span>
            </div>
            <i class="fa-solid fa-star">4/5</i>
          </div>
          <div className="locationCard">
            <img src={Jamaicanlocation} alt="location 1" width={170} />
            <div className="location-details">
              <p className="location-name">New York, U.S.A</p>
              <p>
                One of our best tourist attractions. Get ready to get value for
                your money by experiencing unbelievable things.
              </p>
              <span>$440,000</span>
            </div>
            <i class="fa-solid fa-star">4/5</i>
          </div>
        </Carousel>
        <h1>Best Offers</h1>
        <div className="offer-container">
          <div className="offer-card">
            <img src={Offer1} alt="luxury" width={230} />
            <p>7Seasons Apartment</p>
            <i class="fa-solid fa-location-dot">Lekki/Lagos</i>
            <div className="price">
              <span>$50,00/Night</span>
              <i className="bx bx-heart"></i>
            </div>
          </div>
          <div className="offer-card">
            <img src={Offer2} alt="luxury" width={230} />
            <p>7Seasons Apartment</p>
            <i class="fa-solid fa-location-dot"> Lekki/Lagos</i>
            <div className="price">
              <span>$50,00/Night</span>
              <i className="bx bx-heart"></i>
            </div>
          </div>
          <div className="offer-card">
            <img src={Offer3} alt="luxury" width={230} />
            <p>7Seasons Apartment</p>
            <i class="fa-solid fa-location-dot"> Lekki/Lagos</i>
            <div className="price">
              <span>$50,00/Night</span>
              <i className="bx bx-heart"></i>
            </div>
          </div>
          <div className="offer-card">
            <img src={Offer4} alt="luxury" width={230} />
            <p>7Seasons Apartment</p>
            <i class="fa-solid fa-location-dot"> Lekki/Lagos</i>
            <div className="price">
              <span>$50,00/Night</span>
              <i className="bx bx-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelPackages;
