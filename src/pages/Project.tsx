import "./project.scss";
export default function Project() {
  return (
    <section className="projects container_20 ">
      <div className="projectsTitle">
        <h4>Projects</h4>
      </div>
      <ul className="projectsList">
        <li className="projectCard">
          <p className="img">
            <img src="" alt="" />
          </p>
          <h4>
            <span className="title">Title</span>
            <span className="date">2024</span>
          </h4>
        </li>
      </ul>
    </section>
  );
}