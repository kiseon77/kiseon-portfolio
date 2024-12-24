import { useEffect, useState } from "react";
import "./component.scss";
export default function ProjectInfo() {
  const [imgs, setImgs] = useState([
    {
      id: 1,
      color: "lightblue",
      src: "https://picsum.photos/id/1/200/300",
    },
    {
      id: 2,
      color: "#B27397",
      src: "https://picsum.photos/id/2/200/300",
    },
    {
      id: 3,
      color: "#FFBEE3",
      src: "https://picsum.photos/id/3/200/300",
    },
    {
      id: 4,
      color: "#FFE63C",
      src: "https://picsum.photos/id/4/200/300",
    },
    {
      id: 5,
      color: "#2BBECC",
      src: "https://picsum.photos/id/5/200/300",
    },
    {
      id: 6,
      color: "#7CAEB2",
      src: "https://picsum.photos/id/6/200/300",
    },
  ]);

  return (
    <>
      <div className="projectInfoContainer">
        <div
          className="container"
          style={{ "--imgCount": imgs.length - 1 } as React.CSSProperties}
        >
          {imgs.map((img, index) => (
            <div className="imgBox" key={index}>
              <img src={img.src} alt={img.color} />
            </div>
          ))}
        </div>
      </div>
      <div className="projectInfoText">
        <div className="infoBox">
          <h4>프로젝트 기획배경</h4>
          <p></p>
        </div>
        <div className="infoBox">
          <h4>프로젝트 상세소개</h4>
          <h5>핵심기능</h5>
          <p></p>
          <h5>타겟유저</h5>
          <p></p>
          <h5>기대효과</h5>
          <p></p>
          <h5>개발기간 & 일정</h5>
          <p>
            프론트엔드 개발 : 2024.12.18 ~ 2024.12.18 <br />
            백엔드 개발 : 2024.12.18 ~ 2024.12.18 <br />
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
                <tr>
                  <td>한기선</td>
                  <td>
                    <a href="https://github.com/kiseon77" target="_blank">
                      @kiseon77
                    </a>
                  </td>
                  <td>프론트엔드</td>
                  <td>미참여</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      </div>
    </>
  );
}
