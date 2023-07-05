import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../assets/vpc_image1.jpeg"; // replace with the path to your images
import img2 from "../../assets/vpc_image4.jpg";
import img3 from "../../assets/vpc_image3.jpg";
import "../styles/HomeSection.css";

const HomeSection = () => {
  return (
    <section id="home">
      <div className="meeting-info">
        <h2>Next Meeting</h2>
        <p>Time: 7:00 PM</p>
        <p>Location: Room 101</p>
      </div>
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <img src={img1} alt="slide" />
          </div>
          <div>
            <img src={img2} alt="slide" />
          </div>
          <div>
            <img src={img3} alt="slide" />
          </div>
        </Carousel>
      </div>
      {/* Rest of the component */}
    </section>
  );
};

export default HomeSection;
