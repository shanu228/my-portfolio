import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Pursottam Jha</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a
            href="https://www.linkedin.com/in/pursottam-jha-b77860171/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>

          <a href="https://github.com/shanu228" target="_blank">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, JavaScript, TypeScript, Redux, HTML, CSS, BootStrap,
              MaterialUI, Yarn, TailwindCSS,
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
