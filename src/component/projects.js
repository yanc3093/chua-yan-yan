import ProjectContainer from "./projectContainer";
import projects from "../data/projects";

function Projects() {
  const result = [];
  let row = [];
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    row.push(
      <ProjectContainer
        id={project.id}
        image={project.image}
        description={project.description}
        repositoryLink={project.repositoryLink}
        videoLink={project.videoLink}
      />
    );
    if (row.length === 3 || i === projects.length - 1) {
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
