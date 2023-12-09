import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Parallax } from "react-scroll-parallax";

export const GitHub = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="section-heading">GitHub Stats</h1>
      <div className="row mt-5 g-3">
        <div className="col-lg-6">
          <Parallax speed={70} translateY={[90, -180]}>
            <GitHubCalendar username="Mrinal26" />
          </Parallax>
        </div>

        <div className="col-lg-6">
          <Parallax speed={30} translateY={[110, -200]}>
            <img
              src="https://github-readme-stats.vercel.app/api?username=Mrinal26&theme=dark&show_icons=true&hide_border=true&count_private=true"
              className="img-fluid github-stats-card"
              alt=""
            />
          </Parallax>
        </div>
        <div className="col-lg-6">
        <Parallax speed={190} translateY={[-100, 120]}>
          <img
            src={
              "https://github-readme-streak-stats.herokuapp.com/?user=Mrinal26&theme=dark&hide_border=true"
            }
            alt=""
            className="img-fluid mt-4 github-streak-stats"
          />
          </Parallax>
        </div>
        <div className="col-lg-6">
        <Parallax speed={130} translateY={[-50, 50]}>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mrinal26&theme=dark&show_icons=true&hide_border=true&layout=compact"
            className="img-fluid mt-4 github-top-langs"
            alt=""
          />
          </Parallax>
        </div>
      </div>
    </div>
  );
};
