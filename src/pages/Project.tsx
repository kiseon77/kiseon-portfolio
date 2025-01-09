import "./project.scss";
import projectData from "../data/projects.json";

interface ProjectProps {
  handleModal?: (projId: number) => void;
}
export default function Project({}: ProjectProps) {
  return (
    <section className="projects container_20 ">
      <div className="projectsTitle">
        <h4>Projects</h4>
      </div>

      <ul className="projectsList">
        {projectData.project.map((proj) => (
          <a key={proj.id} href={proj.links.notion} target="_blank">
            <li
              className="projectCard"
              // onClick={() => handleModal(proj.id)}
            >
              <p className="img">
                <img src={proj.logo} alt="" />
                <span className="projectType_badge">{proj.type}</span>
              </p>
              <h4>
                <span className="title">{proj.title}</span>
                <span className="date">{proj.period.total.end}</span>
              </h4>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
}
