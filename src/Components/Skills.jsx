import React from "react";
import { Marqee } from "../Components/Marqee";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const Skills = () => {
  return (
    <div className="mt-5" id="skills">
      <Marqee title={"SKILLS"} />
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0}>
          <div className="frontend container p-5">
            <div className="row">
              <div className="col-lg-5 col-md-12 d-flex align-items-center">
                <h1 className="section-heading">FRONTEND SKILLS</h1>
              </div>
              <div className="col-lg-5 col-md-12">
                <ul className="skills-li">
                  <div className="html">
                    <li className="skills-card-name">HTML <i className="fab fa-html5 fa-xl"></i></li>
                  </div>
                  <div className="css">
                    <li className="skills-card-name">CSS <i className="fab fa-css3-alt fa-xl"></i></li>
                  </div>
                  <div className="js">
                    <li className="skills-card-name">Javascript <i className="fab fa-js fa-xl"></i></li>
                  </div>
                  <div className="react">
                    <li className="skills-card-name">ReactJs <i className="fab fa-react fa-xl"></i></li>
                  </div>
                  <div className="bootstrap">
                    <li className="skills-card-name">Bootstrap <i className="fab fa-bootstrap fa-xl"></i></li>
                  </div>
                  <div className="angular">
                    <li className="skills-card-name">Figma <i className="fab fa-figma fa-xl"></i></li>
                  </div>
                  <div className="redux">
                    <li className="skills-card-name">Redux <i className="fab fa-react fa-xl"></i></li>
                  </div>
                  <div className="ts">
                    <li className="skills-card-name">TypeScript <i className="fab fa-react fa-xl"></i></li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.2} style={{ height: "100%!important", backgroundColor: "black" }}>
          <div className="backend container p-5">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <ul className="skills-li">
                  <div className="node">
                    <li className="skills-card-name">NodeJs <i className="fab fa-node-js fa-xl"></i></li>
                  </div>
                  <div className="express">
                    <li className="skills-card-name">ExpressJs <i className="fab fa-node-js fa-xl"></i></li>
                  </div>
                  <div className="mongo">
                    <li className="skills-card-name">MongoDB <i className="fas fa-database fa-xl"></i></li>
                  </div>
                  <div className="mongoose">
                    <li className="skills-card-name">Mongoose <i className="fas fa-database fa-xl"></i></li>
                  </div>
                </ul>
              </div>
              <div className="col-lg-5 col-md-12 d-flex align-items-center">
                <h1 className="section-heading">BACKEND SKILLS</h1>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: "black" }}>
          <div className="other container p-5">
            <div className="row">
              <div className="col-lg-5 col-md-12 d-flex align-items-center">
                <h1 className="section-heading">OTHER IMPORTANT SKILLS</h1>
              </div>
              <div className="col-lg-5 col-md-12">
                <ul className="skills-li">
                  <div>
                    <li className="skills-card-name">Communication <i className="fas fa-comments fa-xl"></i></li>
                  </div>
                  <div>
                    <li className="skills-card-name">Attention to Detail <i className="fas fa-check fa-xl"></i></li>
                  </div>
                  <div>
                    <li className="skills-card-name">Punctuality <i className="far fa-clock fa-xl"></i></li>
                  </div>
                  <div>
                    <li className="skills-card-name">Determination <i className="fas fa-bolt fa-xl"></i></li>
                  </div>
                  <div>
                    <li className="skills-card-name">Linux <i className="fab fa-linux fa-xl"></i></li>
                  </div>
                  <div>
                    <li className="skills-card-name">Virtual Machines <i className="fas fa-hdd fa-xl"></i></li>
                  </div>
                  <div>
                    <li className="skills-card-name">Netlify <i className="fas fa-cloud-upload-alt fa-xl"></i></li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
