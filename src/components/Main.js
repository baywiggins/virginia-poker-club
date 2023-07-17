import React from "react";
import AboutSection from "./sections/AboutSection";
import ExecBoardSection from "./sections/ExecBoardSection";
import HomeSection from "./sections/HomeSection";
import LeaderboardSection from "./sections/LeaderboardSection";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <main>
      <Header />
      <HomeSection />
      <AboutSection />
      <ExecBoardSection />
      <LeaderboardSection />
      <section id="join">
        <h2>Join</h2>
      </section>
      <Footer />
    </main>
  );
};

export default Main;
