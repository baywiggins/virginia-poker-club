import React from "react";
import { Link } from "react-scroll";
import "./styles/Header.css";
import logo from "../assets/pokerchip_logo.png";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={logo} alt="Club Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <CardList name="ace" />
            <Link
              className="link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <CardList name="king" />
            <Link
              className="link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <CardList name="queen" />
            <Link
              className="link"
              activeClass="active"
              to="exec-board"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Exec Board
            </Link>
          </li>
          <li>
            <CardList name="jack" />
            <Link
              className="link"
              activeClass="active"
              to="leaderboard"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <CardList name="ten" />
            <Link
              className="link"
              activeClass="active"
              to="join"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Join
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

function CardList({ name }) {
  const suits = ["clubs", "diamonds", "hearts", "spades"];
  const id_names = { queen: "exec", jack: "leaderboard", ten: "join" };
  let id = "";

  if (name in id_names) {
    id = id_names[name];
  }

  let currentIndex = suits.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [suits[currentIndex], suits[randomIndex]] = [
      suits[randomIndex],
      suits[currentIndex],
    ];
  }

  return (
    <div className="card-fan" id={`${id}-fan`}>
      {suits.map((suit, index) => (
        <img
          key={`${name}-${suit}-${index}`}
          src={require(`../assets/cards/${name}_of_${suit}.png`)}
        />
      ))}
    </div>
  );
}

export default Header;
