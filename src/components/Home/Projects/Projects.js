/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Projects.scss";
import Meridian from "../../../images/projects/meridian.jpg";
import ESecu from "../../../images/projects/ESecu.jpg";
import Support from "../../../images/projects/assignment support.jpg";
import Thriftzee from "../../../images/projects/Thriftzee.jpg";
import SOC from "../../../images/projects/SOC.png";
import Feenixlab from "../../../images/projects/feenixlab.jpg";
import Myol from "../../../images/projects/myol.jpg";
import Dynamic from "../../../images/projects/dynamic.jpg";
import Kangaroo from "../../../images/projects/kangaroo.jpg";
const Projects = () => {
  return (
    <div className="Projects">
      <div className="container py-5">
        <div className="header text-center">
          <h2>
            LATEST <span>PROJECTS</span>
          </h2>
          <div className="wrapper">
            <div className="divider div-transparent div-dot"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img className="card-img-top" src={SOC} alt="SOAC" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Surfing on a Cloud</h4>
                <p className="role">Frontend & Backend</p>
                <p className="card-text">
                  Basically, it's a Kids Guided Meditations for Sleep App. The
                  frontend backend of the portal has been developed to manage
                  this app.
                </p>
                <div className="technology mb-4">
                  <span>Node.Js</span> <span>React.Js</span>{" "}
                  <span>Redux.Js</span> <span>AWS</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img className="card-img-top" src={Thriftzee} alt="Thriftzee" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Thriftzee</h4>
                <p className="role">Frontend & Backend</p>
                <p className="card-text">
                  Thriftzee revolutionizes thrifting by uniting diverse thrift
                  stores under one user-friendly platform, offering a wide range
                  of categorized products. With innovative features like
                  auctions and quick buying options, Thriftzee aims to enhance
                  the thrill of thrifting while ensuring convenience for both
                  buyers and stores worldwide.
                </p>

                <div className="technology mb-4">
                  <span> Node.Js</span> <span> Koa.Js</span>{" "}
                  <span>React.Js</span> <span>Redux.Js</span>
                  <span>DynamoDB</span>
                  <span>AWS</span>
                  <span>Material UI</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img
                  className="card-img-top"
                  src={ESecu}
                  alt="E-Securities Limited"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">E-Securities Limited</h4>
                <p className="role">Frontend & Backend</p>
                <p className="card-text">
                  Thriftzee revolutionizes thrifting by uniting diverse thrift
                  stores under one user-friendly platform, offering a wide range
                  of categorized products. With innovative features like
                  auctions and quick buying options, Thriftzee aims to enhance
                  the thrill of thrifting while ensuring convenience for both
                  buyers and stores worldwide.
                </p>

                <div className="technology mb-4">
                  <span>Node.Js</span> <span> Express.Js</span>{" "}
                  <span>MySQL</span> <span>javaScript</span>
                  <span>Bootstarp</span>
                  <span>SCSS</span>
                </div>
                <div className="text-right link">
                  {/* <a href="" target="_blank" className="mr-3"><i className="fab fa-github"></i></a> */}
                  <a href="https://esecuritiesbd.com/" target="_blank">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img
                  className="card-img-top"
                  src={Support}
                  alt="Assignment Support"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Assignment Support System</h4>
                <p className="role">Frontend & Backend</p>
                <p className="card-text">
                  This software is a uk-based company where the problems of
                  assignments of different varsities are solved. The backend
                  admin will solve the problem and submit it and collect the
                  solved file of that student from his dashboard.
                </p>
                <div className="technology mb-4">
                  <span>PHP</span> <span>MySQL</span> <span>SCSS</span>{" "}
                  <span>javaScript</span>
                  <span>Bootstrap</span>
                </div>
                <div className="text-right link">
                  {/* <a href="" target="_blank" className="mr-3"><i className="fab fa-github"></i></a> */}
                  <a href="https://assignmentsupport.biz/" target="_blank">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img className="card-img-top" src={Feenixlab} alt="Feenixlab" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Feenix Lab</h4>
                <p className="role">Frontend & Backend</p>
                <p className="card-text">
                  Here I have designed the UI for their website according to
                  their needs. Then I started creating websites from scratch.
                  They didn't have a backend to control their website, so I
                  developed a backend to control them later.
                </p>
                <div className="technology mb-4">
                  <span>PHP</span> <span>MySQL</span> <span>SCSS</span>{" "}
                  <span>javaScript</span>
                  <span>Bootstrap</span>
                </div>
                <div className="text-right link">
                  {/* <a href="" target="_blank" className="mr-3"><i className="fab fa-github"></i></a> */}
                  <a href="https://www.feenixlab.com/" target="_blank">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img
                  className="card-img-top"
                  src={Myol}
                  alt="MY Outsourcing Limited"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">MY Outsourcing Limited</h4>
                <p className="role">Frontend & Backend</p>
                <p className="card-text">
                  This company works with call services. Here I have designed UI
                  for their website according to their requirement. Then I
                  started building websites from scratch.
                </p>
                <div className="technology mb-4">
                  <span>PHP</span> <span>MySQL</span> <span>Node.js</span>{" "}
                  <span>SCSS</span> <span>javaScript</span>{" "}
                  <span>Bootstrap</span> <span>HTML</span>
                </div>
                <div className="text-right link">
                  {/* <a href="" target="_blank" className="mr-3"><i className="fab fa-github"></i></a> */}
                  <a href="https://www.myolbd.com/" target="_blank">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img
                  className="card-img-top"
                  src="https://i.imgur.com/uIWNlO5.jpg"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Critave Agnecy</h4>
                <p className="role">Frontend & Backend</p>
                <p className="card-text">
                  A simple single page web application(SPA). In this
                  application, the user can login to receive the service of his
                  choice and the admin can control the entire website from the
                  admin panel.
                </p>
                <div className="technology mb-4">
                  <span>React</span> <span>MongoDb</span> <span>Node.js</span>{" "}
                  <span>ExpressJS</span> <span>Firebase</span>{" "}
                  <span>React-Bootstrap</span> <span>SCSS</span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-left purpose">
                    <span>For Practice</span>
                  </div>
                  <div className="text-right link">
                    <a
                      href="https://github.com/asadsanto10/creative-agency-client"
                      target="_blank"
                      className="mr-3"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://creative-agnecy.web.app/" target="_blank">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img
                  className="card-img-top"
                  src={Dynamic}
                  alt="Dynamic It Solutions"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Dynamic It Solutions</h4>
                <p className="role">Frontend & Backend</p>
                <p className="card-text">
                  Here I have designed the UI for their website according to
                  their needs. Then I started creating websites from scratch.
                </p>
                <div className="technology mb-4">
                  <span>PHP</span> <span>MySQL</span> <span>javaScript</span>{" "}
                  <span>jQuery</span> <span>SCSS</span> <span>Bootstrap</span>{" "}
                  <span>HTML</span>
                </div>
                <div className="text-right link">
                  {/* <a href="https://github.com/asadsanto10/creative-agency-client" target="_blank" className="mr-3"><i className="fab fa-github"></i></a> */}
                  <a href="https://dynamicits.us" target="_blank">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img
                  className="card-img-top"
                  src={Kangaroo}
                  alt="Kangaroo Global Bangladesh"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Kangaroo Global Bangladesh</h4>
                <p className="role">Frontend & Backend</p>
                <p className="card-text">
                  This is an education consultant's website. Here I have
                  developed a WordPress theme. Here they have been developed
                  based on the information of Education Consultant.
                </p>
                <div className="technology mb-4">
                  <span>WordPress</span> <span>MySQL</span>{" "}
                  <span>javaScript</span> <span>jQuery</span> <span>SCSS</span>{" "}
                  <span>Bootstrap</span>
                </div>
                <div className="text-right link">
                  {/* <a href="https://github.com/asadsanto10/creative-agency-client" target="_blank" className="mr-3"><i className="fab fa-github"></i></a> */}
                  <a href="https://kangarooglobal.com.bd" target="_blank">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img
                  className="card-img-top"
                  src={Meridian}
                  alt="Meridian International"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Meridian International</h4>
                <p className="role">Frontend</p>
                <p className="card-text">
                  This is basically an IT company's website where I changed its
                  structure and developed a new layout.
                </p>
                <div className="technology mb-4">
                  <span>JavaScript</span> <span>jQuery</span> <span>SCSS</span>{" "}
                  <span>HTML</span>
                </div>
                <div className="text-right link">
                  <a href="https://meridian.international/" target="_blank">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img
                  className="card-img-top"
                  src={Artist}
                  alt="Meridian International"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Artist Protfolio</h4>
                <p className="role">Frontend</p>
                <p className="card-text">
                  A simple single page web application(SPA).
                </p>
                <div className="technology mb-4">
                  <span>JavaScript</span> <span>jQuery</span> <span>SCSS</span>{" "}
                  <span>HTML</span>
                </div>
                <div className="text-right link">
                  <a href="https://rajeebhussain.com/" target="_blank">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img
                  className="card-img-top"
                  src="https://i.imgur.com/ik2Dwwl.jpg"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Volunteer Network</h4>
                <p className="role">Frontend & Backend</p>
                <p className="card-text">
                  A simple single page web application(SPA).In this application,
                  the user will be able to participate in the work of his choice
                  through login and the admin can control the entire website
                  from the admin panel.
                </p>
                <div className="technology mb-4">
                  <span>React</span> <span>MongoDb</span> <span>Node.js</span>{" "}
                  <span>ExpressJS</span> <span>Firebase</span>{" "}
                  <span>React-Bootstrap</span> <span>SCSS</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-left purpose">
                    <span>For Practice</span>
                  </div>
                  <div className="text-right link">
                    <a
                      href="https://github.com/asadsanto10/volunteer-network-client"
                      target="_blank"
                      className="mr-3"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://volunteer-network-3ff26.web.app/"
                      target="_blank"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card mt-4">
              <div className="image-box">
                <img
                  className="card-img-top"
                  src="https://i.imgur.com/HOAIu8k.jpg"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Travel Guru</h4>
                <p className="role">Frontend & Backend</p>
                <p className="card-text">
                  A simple single page web application(SPA).In this application,
                  the user can select a place according to his choice through
                  login and book a room in that place as per the type of room he
                  wants. According to the place, the user will also be able to
                  see the map of that place.
                </p>
                <div className="technology mb-4">
                  <span>React</span> <span>MongoDb</span> <span>Node.js</span>{" "}
                  <span>ExpressJS</span> <span>Firebase</span>{" "}
                  <span>React-Bootstrap</span> <span>SCSS</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-left purpose">
                    <span>For Practice</span>
                  </div>
                  <div className="text-right link">
                    <a
                      href="https://github.com/asadsanto10/volunteer-network-client"
                      target="_blank"
                      className="mr-3"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://travel-guru-master.web.app/"
                      target="_blank"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
