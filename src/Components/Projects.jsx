import project from "../Components/project.png";
import carver from "../Components/carver.png";
import jiomart from "../Components/jiomart.png";
import newp from "../Components/newp.png"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Marqee } from "./Marqee";

export const Projects = () => {
  return (
    <div
      className="mt-5 mb-5"
      id="projects"
      style={{ background: "black", height: "100vh" }}
    >
      <Marqee title={"PROJECTS"}/>
      <div className="project-cards">
        <Parallax pages={3}>
          <ParallaxLayer offset={0} speed={0} factor={0.5}>
            <div className="cards project-card p-4">
              <div className="row d-flex align-items-center g-5">
                <div className="col-lg-4 col-md-12">
                  <h1 className="section-heading project-title">
                    GREEN PARADISE
                  </h1>
                  <p className="b-text project-description">
                    An E-commerce website that has end to end funtionality from
                    Login to purchasing to checkout with RazorPay.
                  </p>
                  <h2>Tech Stack</h2>
                  <div className="d-flex flex-wrap gap-2">
                    <button className="btn2 project-tech-stack">HTML</button>
                    <button className="btn2 project-tech-stack">CSS</button>
                    <button className="btn2 project-tech-stack">
                      Bootstrap
                    </button>
                    <button className="btn2 project-tech-stack">
                      JavaScript
                    </button>
                    <button className="btn2 project-tech-stack">
                      Firebase
                    </button>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <img src={project} className="img-fluid" alt="" />
                  <div className="profile-links mt-5 d-flex gap-3 justify-content-center">
                    <a
                      className="project-github-link"
                      href="https://github.com/CodnanBaig/green-paradise.git"
                    >
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a
                      href="https://green-paradise-plants.netlify.app/"
                      className="project-deployed-link"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.9} speed={0.1} factor={0.5}>
            <div className="cards project-card p-4">
              <div className="row d-flex align-items-center g-5">
                <div className="col-lg-4 col-md-12">
                  <h1 className="section-heading project-title">CARVER</h1>
                  <p className="b-text project-description">
                  Redesign of the Carver Website, which is a surfskate selling
                   e-commerce application. You can browse through a varities 
                   of skates made by most famous brands in the market.
                  </p>
                  <h2>Tech Stack</h2>
                  <div className="d-flex flex-wrap gap-2">
                    <button className="btn2 project-tech-stack">React</button>
                    <button className="btn2 project-tech-stack">Redux</button>
                    <button className="btn2 project-tech-stack">
                      Bootstrap
                    </button>
                    <button className="btn2 project-tech-stack">Reveal</button>
                    <button className="btn2 project-tech-stack">
                      Firebase
                    </button>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <img src={carver} className="img-fluid" alt="" />
                  <div className="profile-links mt-5 d-flex gap-3 justify-content-center">
                    <a
                      className="project-github-link"
                      href="https://github.com/slowandrarecooked/teamCarver.git"
                    >
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a
                      href="https://6516b764de7a6771f0bc0406--chimerical-macaron-c431dc.netlify.app/"
                      className="project-deployed-link"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.8} speed={0.7} factor={0.5}>
            <div className="cards project-card p-4">
              <div className="row d-flex align-items-center g-5">
                <div className="col-lg-4 col-md-12">
                  <h1 className="section-heading project-title">JioMart</h1>
                  <p className="b-text project-description">
                  Jio Mart is a clone of Jiomart.com. Jio Mart is India's most 
                  convenient online grocery channel. No more hassles of sweating
                   it out in crowded markets, grocery shops & supermarkets - now 
                   shop from the comfort of your home, office or on the move.
                  </p>
                  <h2>Tech Stack</h2>
                  <div className="d-flex flex-wrap gap-2">
                    <button className="btn2 project-tech-stack">HTML</button>
                    <button className="btn2 project-tech-stack">CSS</button>
                    <button className="btn2 project-tech-stack">
                      JavaScript
                    </button>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <img src={jiomart} className="img-fluid" alt="" />
                  <div className="profile-links mt-5 d-flex gap-3 justify-content-center">
                    <a
                      className="project-github-link"
                      href="https://github.com/sachin2398/jio-mart.git"
                    >
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a
                      href="jio-mart-sigma.vercel.app"
                      className="project-deployed-link"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={2} factor={0.5}>
            <div className="cards project-card p-4">
              <div className="row d-flex align-items-center g-5">
                <div className="col-lg-4 col-md-12">
                  <h1 className="section-heading project-title">
                    Electronics
                  </h1>
                  <p className="b-text project-description">
                    A platform is designed with user convenience in mind,
                    ensuring a seamless shopping experience for customers
                    looking to upgrade their tech game. 
                  </p>
                  <h2>Tech Stack</h2>
                  <div className="d-flex flex-wrap gap-2">
                    <button className="btn2 project-tech-stack">HTML</button>
                    <button className="btn2 project-tech-stack">CSS</button>
                    <button className="btn2 project-tech-stack">
                      Bootstrap
                    </button>
                    <button className="btn2 project-tech-stack">
                      JavaScript
                    </button>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <img src={newp} className="img-fluid" alt="" />
                  <div className="profile-links mt-5 d-flex gap-3 justify-content-center">
                    <a
                      className="project-github-link"
                      href="https://github.com/VimalrajVR12/Electronics.git"
                    >
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a
                      href="https://ericxportfolio.netlify.app/"
                      className="project-deployed-link"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};
