import React from "react";
import "../styles/ExecBoardSectionAnimations.css";
import "../styles/ExecBoardSection.css";
import testImage from "../../assets/full_logo.png";

const boardMembers = [
  {
    name: "Pranav",
    title: "President",
    image: testImage,
    bio: "Pranav is a third year Computer Science + Mathematics double major. He is a degenerate gambler",
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
    bio: "Bio 2",
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
  // ... add more board members
];

const ExecBoardSection = () => {
  return (
    <section id="exec-board">
      <h2>Exec Board</h2>
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
