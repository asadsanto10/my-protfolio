import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import "./Home.scss";
const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Skills />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;