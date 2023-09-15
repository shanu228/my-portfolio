import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <InstagramIcon /> */}
        {/* <TwitterIcon /> */}
        {/* <FacebookIcon /> */}
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
      <p>Pursottam Jha</p>
    </div>
  );
}

export default Footer;
