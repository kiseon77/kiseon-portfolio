import styles from "./wiki.module.scss";
import { Project } from "../pages/Projects/type";
interface ProjectWikiProp {
  projectInfo: Project | null;
}
export default function ProjectWiki({ projectInfo }: ProjectWikiProp) {
  return (
    <div className={styles.projectWikiContainer}>
      <div className={styles.stack_container}>
        <div className={styles.stack_title}>사용한 기술 스택</div>

        <p className={styles.stack_title_type}>프론트엔드</p>
        <ul>
          {projectInfo?.techStack.frontend.map((frontStack) => (
            <li key={frontStack.name} className={styles.stack_list}>
              <span className={styles.stack_name}>{frontStack.name}</span>
              <span>{frontStack.reason}</span>
            </li>
          ))}
        </ul>

        <ul>
          <p>디자인/기획</p>
          {projectInfo?.techStack.design.map((design) => (
            <li key={design}>{design}</li>
          ))}
        </ul>

        <ul>
          <p>백엔드</p>
          {projectInfo?.techStack.backend.map((backendStack) => (
            <li key={backendStack}>{backendStack}</li>
          ))}
        </ul>
        <ul>
          <p>인프라</p>
          {projectInfo?.techStack.infrastructure.map((infrastructure) => (
            <li key={infrastructure}>{infrastructure}</li>
          ))}
        </ul>
        <ul>
          <p>버전 및 이슈관리</p>
          {projectInfo?.techStack.versionControl.map((versionControl) => (
            <li key={versionControl}>{versionControl}</li>
          ))}
        </ul>
        <ul>
          <p>협업</p>
          {projectInfo?.techStack.collaboration.map((collaboration) => (
            <li key={collaboration}>{collaboration}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
