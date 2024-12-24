import { useState } from "react";
import "./projectDetail.scss";
import ProjectInfo from "../../components/ProjectInfo";
import ProjectWiki from "../../components/ProjectWiki";
import ProjectBlogs from "../../components/ProjectBlogs";
interface DetailProps {
  handleModal: () => void;
}

export default function Detail({ handleModal }: DetailProps) {
  const [isAssignedPart, setIsAssignedPart] = useState<boolean>(true);
  const [activeTabbar, setActiveTabbar] = useState<number>(0);
  const handlerTapBar = (i: number) => {
    setActiveTabbar(i);
  };
  const tapBarArr = [
    { name: "프로젝트이름 소개", content: <ProjectInfo /> },
    { name: "개발위키", content: <ProjectWiki /> },
    { name: "개발이야기", content: <ProjectBlogs /> },
  ];
  return (
    <div className="detailContainer">
      <div className="overlay" onClick={handleModal}></div>
      <div className="contentBox">
        <div className="projectHeader">
          <h2>
            <img alt="logo" />
            프로젝트 이름
          </h2>
          <div className="projectService">프로젝트 서비스 소개</div>
        </div>
        <div className="serviceLink">
          <a href="" target="_blank">
            서비스
            <span>프로젝트 이름</span>
          </a>
          <a href="" target="_blank">
            깃허브
            <span>깃허브 레포지토리 이름</span>
          </a>
          <div className="stack">사용한 기술 스택</div>
          <ul>
            <p>프론트엔드</p>
            <li></li>
          </ul>
          <ul>
            <p>백엔드</p>
            <li></li>
          </ul>
        </div>

        <div className="myPartDev">
          <button
            type="button"
            onClick={() => setIsAssignedPart((prev) => !prev)}
          >
            {isAssignedPart ? "📂" : "📁"} 담당한 파트
          </button>
          <p className="myPartSummary">FE개발, 기획, 디자인</p>
          {/* {isAssignedPart && <div className="myPart">ㄴ</div>} */}{" "}
          <div className={`myPart ${isAssignedPart ? "on" : "off"}`}>
            <ul>
              <p>프론트엔드</p>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="devInfoTab">
          <ul>
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
        </div>
      </div>
    </div>
  );
}
