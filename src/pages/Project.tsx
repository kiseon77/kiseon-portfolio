import "./project.scss";
import projectData from "../data/projects.json";
interface ProjectProps {
  handleModal: (projId: number) => void;
}
export default function Project({ handleModal }: ProjectProps) {
  return (
    <section className="projects container_20 ">
      <div className="projectsTitle">
        <h4>Projects</h4>
      </div>

      <ul className="projectsList">
        {projectData.project.map((proj) => (
          <li
            key={proj.id}
            className="projectCard"
            onClick={() => handleModal(proj.id)}
          >
            <p className="img">
              <img src="" alt="" />
            </p>
            <h4>
              <span className="title">{proj.title}</span>
              <span className="date">{proj.period.total.end}</span>
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
}
