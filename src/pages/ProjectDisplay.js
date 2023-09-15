import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import GithubIcon from "@material-ui/icons/GitHub";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {id == 0 && (
        <a href="https://github.com/shanu228/food-ordering-app" target="_blank">
          <GithubIcon />
        </a>
      )}
      {id == 1 && (
        <a href="https://github.com/shanu228/netflix-gpt" target="_blank">
          <GithubIcon />
        </a>
      )}
      {id == 3 && (
        <a
          href="https://github.com/shanu228/youtube-clone-project"
          target="_blank"
        >
          <GithubIcon />
        </a>
      )}
    </div>
  );
}

export default ProjectDisplay;
