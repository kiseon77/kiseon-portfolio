import { useEffect, useState } from "react";
import "./projectDetail.scss";
import ProjectData from "../../data/projects.json";
import { Project } from "./type";
interface DetailProps {
  handleModal: (projId: number | null) => void;
  activeProj: number | null;
}

export default function Detail({ handleModal, activeProj }: DetailProps) {
  const [projectInfo, setProjectInfo] = useState<Project | null>(null);
  useEffect(() => {
    ProjectData.project.map((proj: any) => {
      if (proj.id === activeProj) {
        setProjectInfo(proj);
      }
    });
  }, [activeProj]);

  return (
    <div className="detailContainer">
      <div className="overlay" onClick={() => handleModal(null)}></div>
      <div className="contentBox">
        {projectInfo?.notionUrl ? (
          <iframe
            src={projectInfo.notionUrl}
            style={{
              width: "100%",
              height: "100vh",
              border: "0",
              padding: "0",
            }}
          ></iframe>
        ) : (
          <p>노션 페이지를 불러올 수 없습니다.</p>
        )}
      </div>
    </div>
  );
}
