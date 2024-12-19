import "./workexperience.scss";
export default function WorkExperience() {
  return (
    <div className="container">
      <div className="EWContainer">
        <h2 className="title">Experience</h2>
        <ul className="List">
          <li className="experience">
            <p className="name">오즈코딩스쿨</p>
            <p className="body">프론트엔드 개발자 양성과정</p>
            <span className="date">2024.06 ~ 2024.12</span>
          </li>
          <li className="experience">
            <p className="name">청년취업사관학교</p>
            <p className="body">풀스택 개발자 양성과정</p>
            <span className="date">2023.09 ~ 2024.03</span>
          </li>
        </ul>
      </div>
      <div className="EWContainer">
        <h2 className="title">Work</h2>
        <ul className="List">
          <li className="experience">
            <p className="name">쿠발토</p>
            <p className="body">UX/UI 디자인 및 콘텐츠 디자인</p>
            <span className="date">2022.09 ~ 2023.09</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
