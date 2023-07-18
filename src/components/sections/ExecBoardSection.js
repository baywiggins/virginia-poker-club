import React from "react";
import "../styles/ExecBoardSectionAnimations.css";
import "../styles/ExecBoardSection.css";
import testImage from "../../assets/full_logo.png";

// Dict of exec members to be mapped onto the website.
// Allows for easy addition/subtractions of members
const boardMembers = [
  {
    name: "Pranav Kandlakunta",
    title: "President",
    image: testImage,
    bio: "Pranav is a third year Computer Science + Mathematics double major. He is a degenerate gambler. More stupid useless information blah.",
  },
  {
    name: "Deniz",
    title: "Vice President",
    image: testImage,
    bio: "Bio 2",
  },
  {
    name: "John Doe",
    title: "Secretary",
    image: testImage,
    bio: "Bio 2",
  },
  {
    name: "Bay Wiggins",
    title: "Outreach Chair",
    image: testImage,
    bio: "Bay is a third year working on his Masters in CS. He enjoys coding, and developed this website!",
  },
  {
    name: "Jane Doe",
    title: "Finance Chair",
    image: testImage,
    bio: "Bio 2",
  },
  {
    name: "Ben Dover",
    title: "Education Chair",
    image: testImage,
    bio: "Bio 2",
  },
  {
    name: "Harry Asian",
    title: "Social Chair",
    image: testImage,
    bio: "Bio 3",
  },
];

const ExecBoardSection = () => {
  // Iterates over boardMembers, and creates JSX array for each of them
  return (
    <section id="exec-board">
      <div className="board-members">
        {boardMembers.map((member, index) => (
          <div
            className="member-card"
            key={index}
            style={{ backgroundImage: `url(${member.image})` }} // set background image here
          >
            <div className="member-info">
              <h3>{member.title}</h3>
              <p>{member.name}</p>
            </div>
            <div className="member-bio">
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExecBoardSection;
