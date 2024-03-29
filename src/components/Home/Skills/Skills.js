import React from "react";
import "./Skills.scss";
import sass from "../../../images/icons/sass.png";
import js from "../../../images/icons/js.png";
import react from "../../../images/icons/react.png";
import bootstrap from "../../../images/icons/bootstrap.png";
import redux from "../../../images/icons/redux.png";
import node from "../../../images/icons/nodejs.png";
import express from "../../../images/icons/expressjs.png";
import mongo from "../../../images/icons/mongodb.png";
import material from "../../../images/icons/meta-ui.png";
import es6 from "../../../images/icons/es6.png";
import heroku from "../../../images/icons/heroku.png";
// import netlify from "../../../images/icons/netlify.png";
import firebase from "../../../images/icons/firebase.png";
import php from "../../../images/icons/php.png";
import git from "../../../images/icons/git.png";
import github from "../../../images/icons/github.png";
import vs from "../../../images/icons/vs-code.png";
import npm from "../../../images/icons/npm.png";
import cdt from "../../../images/icons/cdt.png";
import filezilla from "../../../images/icons/filezilla.png";
import xampp from "../../../images/icons/xampp.png";
import wampp from "../../../images/icons/wampp.png";
import Illustrator from "../../../images/icons/Illustrator.png";
import photoshop from "../../../images/icons/photoshop.png";
import getsbyjs from "../../../images/icons/getsbyjs.png";
import graphQl from "../../../images/icons/graphQl.svg";

const Skills = () => {
  return (
    <section id="Skills">
      <div className="container text-center py-5 my-3">
        <div className="header">
          <h2>
            Work <span>SKILLS</span>
          </h2>
          <div className="wrapper">
            <div className="divider div-transparent div-dot"></div>
          </div>
        </div>
        <div className="comfortable">
          <h3>Expertise</h3>
          <div className="row d-flex justify-content-center align-items-center">
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "50px" }}
                src={react}
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>React</figcaption>
            </div>
            <div>
              <img
                style={{ width: "65px", margin: "10px 20px" }}
                src={redux}
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>redux</figcaption>
            </div>

            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "60px" }}
                src={mongo}
                alt=""
              />
              <figcaption>MongoDB</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "60px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
                alt=""
              />
              <figcaption>PostgreSQL</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "70px", paddingTop: "15px" }}
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png"
                alt=""
              />
              <figcaption style={{ marginTop: "9px" }}>Tailwind CSS</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "45px", paddingTop: "15px" }}
                src={material}
                alt=""
              />
              <figcaption style={{ marginTop: "9px" }}>Material-UI</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "67px" }}
                src={bootstrap}
                alt=""
              />
              <figcaption>Bootstrap</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "55px", paddingTop: "10px" }}
                src={sass}
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>Sass</figcaption>
            </div>
            {/* <div>
              <img
                className="mx-4 my-3"
                style={{ width: "50px" }}
                src={html}
                alt=""
              />
              <figcaption style={{ marginTop: "5px" }}>HTML</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "46px" }}
                src={css}
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>CSS</figcaption>
            </div> */}
          </div>
        </div>
        <div className="familiar mt-5">
          <h3>comfortable</h3>
          <div className="row d-flex justify-content-center align-items-center">
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "40px", paddingTop: "8px" }}
                src={js}
                alt=""
              />
              <figcaption style={{ marginTop: "7px" }}>JavaScript</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "50px", paddingTop: "8px" }}
                src={es6}
                alt=""
              />
              <figcaption style={{ marginTop: "10px" }}>ES6</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "40px", paddingTop: "8px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                alt=""
              />
              <figcaption style={{ marginTop: "7px" }}>TypeScript</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "43px" }}
                src={node}
                alt=""
              />
              <figcaption style={{ marginTop: "13px" }}>Node.js</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "55px" }}
                src={express}
                alt=""
              />
              <figcaption style={{ marginTop: "6px" }}>Express.js</figcaption>
            </div>
            <div>
              <img
                className="my-3"
                style={{ width: "90px" }}
                src={php}
                alt=""
              />
              <figcaption style={{ marginTop: "12px" }}>PHP</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "38px" }}
                src={firebase}
                alt=""
              />
              <figcaption style={{ marginTop: "8px" }}>Firebase</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "50px" }}
                src={heroku}
                alt=""
              />
              <figcaption style={{ marginTop: "10px" }}>Heroku</figcaption>
            </div>
            {/* <div>
              <img
                className="mx-4 my-3"
                style={{ width: "60px" }}
                src={wp}
                alt=""
              />
              <figcaption>WordPress</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "55px" }}
                src={jquery}
                alt=""
              />
              <figcaption>jquery</figcaption>
            </div> */}
          </div>
        </div>
        <div className="tools mt-5">
          <h3>familiar</h3>
          <div className="row d-flex justify-content-center align-items-center">
            {/* <div>
              <img
                style={{ width: "65px", margin: "10px 20px" }}
                src="https://static-00.iconduck.com/assets.00/aws-icon-1024x1024-runl182z.png"
                alt=""
              />
              <figcaption>AWS</figcaption>
            </div> */}

            <div>
              <img
                style={{ width: "65px", margin: "10px 20px" }}
                src="https://static-00.iconduck.com/assets.00/aws-icon-1024x1024-runl182z.png"
                alt=""
              />
              <figcaption style={{ marginTop: "10px" }}>AWS</figcaption>
            </div>
            {/* <div>
                        <img style={{width: '65px', margin: '10px 20px'}} src={codeigniter} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>codeigniter</figcaption>
                    </div> */}
            <div>
              <img
                style={{ width: "65px", margin: "10px 20px" }}
                src={graphQl}
                alt=""
              />
              <figcaption style={{ marginTop: "10px" }}>graphQl</figcaption>
            </div>
            <div>
              <img
                style={{ width: "65px", margin: "10px 20px" }}
                src={getsbyjs}
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>getsbyjs</figcaption>
            </div>
            {/* <div>
              <img
                className="mx-4 my-3"
                style={{ width: "48px" }}
                src={netlify}
                alt=""
              />
              <figcaption style={{ marginTop: "12px" }}>Netlify</figcaption>
            </div> */}
          </div>
        </div>
        <div className="tools mt-5">
          <h3>Tools</h3>
          <div className="row d-flex justify-content-center align-items-center">
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "65px" }}
                src="https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png"
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>Docker</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "50px" }}
                src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png"
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>Postman</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "50px" }}
                src={vs}
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>
                Visual Studio Code
              </figcaption>
            </div>

            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "53px" }}
                src={git}
                alt=""
              />
              <figcaption>Git</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "50px" }}
                src={github}
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>GitHub</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "85px", paddingTop: "10px" }}
                src={npm}
                alt=""
              />
              <figcaption style={{ marginTop: "10px" }}>npm</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "50px" }}
                src={xampp}
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>xampp</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "50px" }}
                src={wampp}
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>wampp</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "50px" }}
                src={cdt}
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>
                Chrome Dev Tools
              </figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "48px" }}
                src={filezilla}
                alt=""
              />
              <figcaption style={{ marginTop: "6px" }}>filezilla</figcaption>
            </div>
          </div>
        </div>
        <div className="tools mt-5">
          <h3>Design Tools</h3>
          <div className="row d-flex justify-content-center align-items-center">
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "70px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png"
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>Figma</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "50px" }}
                src={photoshop}
                alt=""
              />
              <figcaption style={{ marginTop: "4px" }}>photoshop</figcaption>
            </div>
            <div>
              <img
                className="mx-4 my-3"
                style={{ width: "53px" }}
                src={Illustrator}
                alt=""
              />
              <figcaption>Illustrator</figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
