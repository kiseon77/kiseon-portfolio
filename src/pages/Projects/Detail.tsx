import { useEffect, useState } from "react";
import "./projectDetail.scss";
// import ProjectInfo from "../../components/ProjectInfo";
// import ProjectWiki from "../../components/ProjectWiki";
// import ProjectBlogs from "../../components/ProjectBlogs";
import ProjectData from "../../data/projects.json";
import { Project } from "./type";
interface DetailProps {
  handleModal: (projId: number | null) => void;
  activeProj: number | null;
}

export default function Detail({ handleModal, activeProj }: DetailProps) {
  // const [isAssignedPart, setIsAssignedPart] = useState<boolean>(true);
  // const [activeTabbar, setActiveTabbar] = useState<number>(0);
  const [projectInfo, setProjectInfo] = useState<Project | null>(null);
  useEffect(() => {
    ProjectData.project.map((proj: any) => {
      if (proj.id === activeProj) {
        setProjectInfo(proj);
      }
    });
  }, [activeProj]);

  // const handlerTapBar = (i: number) => {
  //   setActiveTabbar(i);
  // };
  // const tapBarArr = [
  //   {
  //     name: `${projectInfo?.title} 소개`,
  //     content: <ProjectInfo projectInfo={projectInfo} />,
  //   },
  //   { name: "개발위키", content: <ProjectWiki projectInfo={projectInfo} /> },
  //   { name: "개발이야기", content: <ProjectBlogs projectInfo={projectInfo} /> },
  // ];
  return (
    <div className="detailContainer">
      <div className="overlay" onClick={() => handleModal(null)}></div>
      <div className="contentBox">
        {/* <div className="projectHeader">
          <h2>
            <img src={projectInfo?.logo} alt="logo" />
            {projectInfo?.title}
          </h2>
          <div className="projectService">
            {projectInfo?.serviceDetails.summary}
          </div>
        </div>
        <div className="serviceLink">
          <a
            href={
              projectInfo?.links.service ? projectInfo?.links.service : void 0
            }
            target="_blank"
          >
            서비스
            {projectInfo?.links.service ? " (배포중)" : " (배포중단)"}
            <span>{projectInfo?.title}</span>
          </a>
          <a href={projectInfo?.links.github} target="_blank">
            깃허브
            <span>{projectInfo?.links.github.split("/").reverse()[0]}</span>
          </a>
        </div>

        <div className="myPartDev">
          <button
            type="button"
            onClick={() => setIsAssignedPart((prev) => !prev)}
          >
            {isAssignedPart ? "📂" : "📁"} 담당한 파트
          </button>
          <p className="myPartSummary">
            {projectInfo?.myRole.summary.map((role) => `${role}, `)}
          </p>
          {isAssignedPart && (
            <div className="myPart">
              {projectInfo?.myRole.features.map((feat) => (
                <div key={feat.title}>- {feat.title}</div>
              ))}
            </div>
          )}
          <div className={`myPart ${isAssignedPart ? "on" : "off"}`}>
            <ul>
              <p>프론트엔드</p>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="devInfoTab">
          <ul className="info_lists">
            {tapBarArr.map((tapBar, i) => (
              <li
                key={tapBar.name}
                onClick={() => handlerTapBar(i)}
                className={activeTabbar === i ? "on" : ""}
              >
                {tapBar.name}
              </li>
            ))}
          </ul>
          <div className="tabBox">{tapBarArr[activeTabbar].content}</div>
        </div> */}
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
