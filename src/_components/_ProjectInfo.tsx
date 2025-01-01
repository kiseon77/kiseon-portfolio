import "./component.scss";
import { Project } from "../pages/Projects/type";

interface ProjectInfoProp {
  projectInfo: Project | null;
}
export default function ProjectInfo({ projectInfo }: ProjectInfoProp) {
  return (
    <>
      <div className="projectInfoContainer">
        <div
          className="container"
          style={
            {
              "--imgCount": projectInfo && projectInfo.screenshots.length - 1,
            } as React.CSSProperties
          }
        >
          {projectInfo?.screenshots.map((img, index) => (
            <div className="imgBox" key={index}>
              <img src={img} alt={`${projectInfo.title}${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="projectInfoText">
        {projectInfo?.serviceDetails.projectBackground ? (
          <div className="infoBox">
            <h4>프로젝트 기획배경</h4>
            <p>{projectInfo?.serviceDetails.projectBackground}</p>
          </div>
        ) : null}
        <div className="infoBox">
          <h4>프로젝트 상세소개</h4>
          <h5>핵심기능</h5>
          <p>
            {projectInfo?.serviceDetails.mainFeatures.map((feat, idx) => (
              <p key={idx}>{feat}</p>
            ))}
          </p>
          {projectInfo?.serviceDetails.targetUser ? (
            <>
              <h5>타겟유저</h5>
              <p>{projectInfo?.serviceDetails.targetUser}</p>
            </>
          ) : null}
          {projectInfo?.serviceDetails.effects ? (
            <>
              <h5>기대효과</h5>
              <p>{projectInfo?.serviceDetails.effects}</p>
            </>
          ) : null}
          <h5>개발기간 & 일정</h5>
          <p>
            {projectInfo?.period.total ? (
              <>
                개발일정 : {projectInfo?.period.total.start}~
                {projectInfo?.period.total.end}
              </>
            ) : null}
          </p>
          <h5>팀원</h5>
          <p>
            <table>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>깃허브</th>
                  <th>역할</th>
                  <th>리팩토링</th>
                </tr>
              </thead>
              <tbody>
                {projectInfo?.team.full.map((member) => (
                  <tr key={member.github}>
                    <td>{member.name}</td>
                    <td>
                      <a
                        href={`https://github.com/${member.github}`}
                        target="_blank"
                      >
                        @{member.github}
                      </a>
                    </td>
                    <td>풀스택</td>
                    <td>{member.refactoring ? "참여" : "미참여"}</td>
                  </tr>
                ))}
                {projectInfo?.team.frontend.map((member) => (
                  <tr key={member.github}>
                    <td>{member.name}</td>
                    <td>
                      <a
                        href={`https://github.com/${member.github}`}
                        target="_blank"
                      >
                        @{member.github}
                      </a>
                    </td>
                    <td>프론트엔드</td>
                    <td>{member.refactoring ? "참여" : "미참여"}</td>
                  </tr>
                ))}
                {projectInfo?.team.backend.map((member) => (
                  <tr key={member.github}>
                    <td>{member.name}</td>
                    <td>
                      <a
                        href={`https://github.com/${member.github}`}
                        target="_blank"
                      >
                        @{member.github}
                      </a>
                    </td>
                    <td>백엔드</td>
                    <td>{member.refactoring ? "참여" : "미참여"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </p>
        </div>
      </div>
    </>
  );
}
