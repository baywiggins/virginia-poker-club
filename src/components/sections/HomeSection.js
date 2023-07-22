import { React, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../assets/vpc_image1.jpeg";
import img2 from "../../assets/vpc_image4.jpg";
import img3 from "../../assets/vpc_image3.jpg";
import "../styles/HomeSection.css";

const HomeSection = () => {
  // Custom NextMeeting component that pulls from the backend API to get the next meeting
  // Also a carousel component bc I didn't really know what else to put
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
    </section>
  );
};

function NextMeeting() {
  // Uses useState to grab the most recent event
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      // async function that grabs the next event from the calendar
      const res = await fetch("/calendar/next-event");
      const data = await res.json();
      setEvent(data);
    };

    fetchEvents();
  }, []);
  if (event.name && event.start_time && event.room) {
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
  } else {
    return (
      <div className="meeting-info">
        <h3>Next event</h3>
        <p>Name: Not Found</p>
        <p>Time: Not Found</p>
        <p>Location: Not Found</p>
      </div>
    );
  }
}

export default HomeSection;
