import "./component.scss";
import { Project } from "../pages/Projects/type";
interface ProjectBlogsProp {
  projectInfo: Project | null;
}
export default function ProjectBlogs({ projectInfo }: ProjectBlogsProp) {
  return <div>ProjectBlogs</div>;
}
