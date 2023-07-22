import { React, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../assets/vpc_image1.jpeg";
import img2 from "../../assets/vpc_image4.jpg";
import img3 from "../../assets/vpc_image3.jpg";
import "../styles/HomeSection.css";

const images = [img1, img2, img3];

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
          {images.map((image, index) => (
            <div>
              <img src={image} alt="slide" key={index} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

function NextMeeting() {
  // Uses useState to grab the most recent event
  const [event, setEvent] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // async function that grabs the next event from the calendar
        const res = await fetch("/calendar/next-event");
        if (res.ok) {
          const data = await res.json();
          setEvent(data);
        } else {
          setError(true); // Set error state to true if API call fails
        }
      } catch (error) {
        setError(true); // Set error state to true if an exception occurs during the API call
      }
    };

    fetchEvents();
  }, []);

  if (error) {
    // Render the component with error message if there's an error in the API call
    return (
      <div className="meeting-info">
        <h3>Next event</h3>
        <p>Error fetching data</p>
      </div>
    );
  } else if (event.name && event.start_time && event.room) {
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
