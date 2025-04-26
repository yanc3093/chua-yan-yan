import ProjectContainer from "./projectContainer";
import projects from "../data/projects";

function Projects(props) {
  const rowLength = props.isMobile ? 1 : 3;
  const result = [];
  let row = [];
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    row.push(
      <ProjectContainer
        isMobile={props.isMobile}
        id={project.id}
        image={project.image}
        description={project.description}
        repositoryLink={project.repositoryLink}
        videoLink={project.videoLink}
      />
    );
    if (row.length === rowLength || i === projects.length - 1) {
      result.push(
        <div className="row" key={result.length + 1}>
          {row}
        </div>
      );
      row = [];
    }
  }
  return (
    <div className="projects">
      <h1>My Projects</h1>
      {result}
    </div>
  );
}

export default Projects;
