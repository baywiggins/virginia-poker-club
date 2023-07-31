import React from "react";
import "../styles/ExecBoardSectionAnimations.css";
import "../styles/ExecBoardSection.css";
import placeholderImage from "../../assets/full_logo.png";
import KAImage from "../../assets/exec_photos/KAImage.png";
import BWImage from "../../assets/exec_photos/BWImage.png";
import PKImage from "../../assets/exec_photos/PKImage.png";
import heart from "../../assets/cards/suits/heart.png";
import diamond from "../../assets/cards/suits/diamond.png";
import spade from "../../assets/cards/suits/spade.png";
import club from "../../assets/cards/suits/club.png";

// Dict of exec members to be mapped onto the website.
// Allows for easy addition/subtractions of members
const boardMembers = [
  {
    name: "Pranav Kandlakunta",
    title: "President",
    img: PKImage,
    bio: "Pranav is a third year Computer Science + Mathematics double major. He is a degenerate gambler.",
    favorite_hand: [
      [4, diamond],
      [2, heart],
    ],
  },
  {
    name: "Deniz Olgun",
    title: "Vice President",
    img: placeholderImage,
    bio: "Deniz",
    favorite_hand: [
      ["A", diamond],
      ["A", heart],
    ],
  },
  {
    name: "Bay Wiggins",
    title: "Outreach Chair",
    img: BWImage,
    bio: "Bay is a third year working on his Masters in CS. He enjoys coding personal projects (including this website), hiking, and shoving river as a bluff.",
    favorite_hand: [
      [6, heart],
      [9, heart],
    ],
  },
  {
    name: "Kunaal Agarwal",
    title: "Treasurer",
    img: KAImage,
    bio: "Kunaal is a third year Computer Science and Biology double major. Outside of the classroom he enjoys to play tennis, chess, and punting off his stack.",
    favorite_hand: [
      [10, diamond],
      [9, diamond],
    ],
  },
  {
    name: "Thomas Phillips",
    title: "Secretary",
    img: placeholderImage,
    bio: "Tom",
    favorite_hand: [
      ["A", diamond],
      ["A", heart],
    ],
  },
  {
    name: "Harry Li",
    title: "Social Chair",
    img: placeholderImage,
    bio: "Asian",
    favorite_hand: [
      ["A", diamond],
      ["A", heart],
    ],
  },
];

const ExecBoardSection = () => {
  // Iterates over boardMembers, and creates JSX array for each of them
  return (
    <section id="exec-board">
      <div className="board-members">
        {boardMembers.map((member, index) => (
          <div className="card-wrapper" key={index}>
            <div className="fav-hand-tab">
              <p id="favorite-hand-text">Favorite Hand: </p>
              {member.favorite_hand &&
                member.favorite_hand.map((card, i) => (
                  <div key={i}>
                    <p>{card[0]}</p> {/* display card value */}
                    <img src={card[1]} alt="card suit" />
                  </div>
                ))}
            </div>
            <div
              className="member-card"
              style={{ backgroundImage: `url(${member.img})` }}
            >
              <div className="member-info">
                <h3>{member.title}</h3>
                <p>{member.name}</p>
              </div>
              <div className="member-bio">
                <p>{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExecBoardSection;
