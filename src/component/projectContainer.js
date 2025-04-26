import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectContainer(props) {
  return props.isMobile ? (
    <div className="projectContainer" key={props.id}>
      <img src={props.image} alt="projectImage" />
      <div className="detail">
        <div className="description">{props.description}</div>
        <div className="link">
          <a
            href={props.repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FontAwesomeIcon className="icon" icon={faGithub} />
              Visit Project Repository
            </button>
          </a>
        </div>
        <div className="link">
          <a href={props.videoLink} target="_blank" rel="noopener noreferrer">
            <button>
              <FontAwesomeIcon className="icon" icon={faVideo} />
              Live Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className="projectContainer" key={props.id}>
      <img src={props.image} alt="projectImage" />
      <div className="description">{props.description}</div>
      <div className="link">
        <a
          href={props.repositoryLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FontAwesomeIcon className="icon" icon={faGithub} />
            Visit Project Repository
          </button>
        </a>
      </div>
      <div className="link">
        <a href={props.videoLink} target="_blank" rel="noopener noreferrer">
          <button>
            <FontAwesomeIcon className="icon" icon={faVideo} />
            Live Demo
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;
