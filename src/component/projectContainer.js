import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectContainer(props) {
  return (
    <div className="projectContainer" key={props.id}>
      <img src={props.image} alt="projectImage" />
      <div className="description">{props.description}</div>
      <div className="link">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faGithub} />
          <div>Visit Project Repository</div>
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;
