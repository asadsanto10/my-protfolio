import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import about from "../../images/about.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About">
      <Navbar />
      <div className="container py-5">
        <div className="header text-center">
          <h2>
            ABOUT <span>ME</span>
          </h2>
          <div className="wrapper">
            <div className="divider div-transparent div-dot"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 text-center py-4">
            <img className="img-fluid profile-image" src={about} alt="" />
            <p className="description mt-4">
              I would like to devote all of my knowledge, skill and expertise to
              my profession in such a prosperous way. Where working environment,
              responsibilities and would be enlightened. Providing the best
              performance by my youth and energy, I could have the opportunity
              to strengthen the organization and build up my own career also.
            </p>
            <Link to="/contact" className="btn mr-1">
              Contact
            </Link>
            <Link to="/projects" className="btn ml-1">
              My Project
            </Link>
          </div>
          <div className="col-md-7 skills pt-3">
            <h2 className="mb-4">SKILLS</h2>
            <div className="skills">
              <h4 className="mb-3">Expertise</h4>
              <p>
                React.JS <span>&#9679;</span> Redux.Js <span>&#9679;</span>{" "}
                Node.Js <span>&#9679;</span> Mongodb <span>&#9679;</span>{" "}
                MongoDB <span>&#9679;</span> Postgressql <span>&#9679;</span>{" "}
                MySQL <span>&#9679;</span> Tailwind CSS{" "}
              </p>

              <h4 className="mt-4 mb-3">COMFORTABLE</h4>
              <p>
                JavaScript <span>&#9679;</span> TypeScript <span>&#9679;</span>{" "}
                ES6 <span>&#9679;</span> Express.js <span>&#9679;</span> Koa.js{" "}
                <span>&#9679;</span> Firebase <span>&#9679;</span> Rest API{" "}
                <span>&#9679;</span> Material UI
              </p>

              <h4 className="mt-4 mb-3">FAMILIAR</h4>
              <p>
                AWS <span>&#9679;</span> GraphQL <span>&#9679;</span> Getsby.js
              </p>

              <h4 className="mt-4 mb-3">Tools</h4>
              <p>
                Postman <span>&#9679;</span> Git <span>&#9679;</span> GitHub{" "}
                <span>&#9679;</span> Visual Studio Code <span>&#9679;</span>{" "}
                Docker <span>&#9679;</span> npm <span>&#9679;</span> Chrome Dev
                Tools <span>&#9679;</span> xampp <span>&#9679;</span>Wampp{" "}
                <span>&#9679;</span>Filezilla
              </p>

              <h4 className="mt-4 mb-3">Design Tools</h4>
              <p>
                Figma <span>&#9679;</span> Adoebe Photoshop <span>&#9679;</span>{" "}
                Adoebe Illustrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
