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
    image: PKImage,
    bio: "Pranav is a third year Computer Science + Mathematics double major. He is a degenerate gambler. More stupid useless information blah.",
    favorite_hand: [
      [7, diamond],
      [7, heart],
    ],
  },
  {
    name: "Bay Wiggins",
    title: "Outreach Chair",
    image: BWImage,
    bio: "Bay is a third year working on his Masters in CS. He enjoys coding personal projects (including this website), hiking, and shoving river as a bluff.",
  },
  {
    name: "Kunaal Agarwal",
    title: "Treasurer",
    image: KAImage,
    bio: "Kunaal is a third year Computer Science and Biology double major. Outside of the classroom he enjoys to play tennis, chess, and punting off his stack.",
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
              style={{ backgroundImage: `url(${member.image})` }}
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
