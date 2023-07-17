import { React, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../assets/vpc_image1.jpeg"; // replace with the path to your images
import img2 from "../../assets/vpc_image4.jpg";
import img3 from "../../assets/vpc_image3.jpg";
import "../styles/HomeSection.css";

const HomeSection = () => {
  return (
    <section id="home">
      <NextMeeting className="next-meeting" />
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

function NextMeeting() {
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/calendar/next-event");
      const data = await res.json();
      setEvent(data);
    };

    fetchEvents();
  }, []);
  return (
    <div className="meeting-info">
      <h3>Next event</h3>
      <p>Name: {event.name}</p>
      <p>
        Time: {event.start_time} - {event.end_time}
      </p>
      <p>
        Location: {event.room}, {event.room_number}
      </p>
    </div>
  );
}

export default HomeSection;
