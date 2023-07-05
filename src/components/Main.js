import React from "react";
import AboutSection from "./sections/AboutSection";
import ExecBoardSection from "./sections/ExecBoardSection";
import HomeSection from "./sections/HomeSection";
import LeaderboardSection from "./sections/LeaderboardSection";

const Main = () => {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ExecBoardSection />
      <LeaderboardSection />
      <section id="join">
        <h2>Join</h2>
      </section>
    </main>
  );
};

export default Main;
