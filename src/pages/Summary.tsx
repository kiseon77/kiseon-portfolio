import "./Summary.scss";
export default function Summary() {
  const myName = "KISEON";

  return (
    <div className="container_20">
      <div className="mainTitle">
        Enjoying the product
        <br />
        프론트엔드 한기선
      </div>
      <p className="subTitle">
        <span>UX/UI디자이너에서</span> <br /> 프론트엔드 개발자로!
      </p>
      <div className="moveName">
        {[...myName].map((Spelling) => {
          return (
            <div key={Spelling} className={Spelling}>
              {Spelling}
            </div>
          );
        })}
      </div>
      <div className="summary">
        <div className="fromDesigner">
          시각디자인을 전공하여 UXUI디자이너로 근무하였습니다. <br /> 디자이너로
          개발자와 소통하는 과정에서 개발자라는 직무에 흥미를 갖게되어 개발을
          공부하게 되었습니다. <br /> 풀스택과정을 통해 프로트엔드 개발과 백엔드
          개발의 차이를 알게 되었고, 이후 디자인을 했던 경험을 살려 프론트엔드
          개발자가 되었습니다.
        </div>
        <div className="slogan">From Designer To Developer</div>
        <div className="toDeveloper">
          디자이너 시절, 스타트업에서 기획부터 런칭까지 서비스가 생겨나는 과정을
          지켜보면서, 프로덕트가 생겨나는 과정을 겪어보았습니다. 이후 개발자로써
          프로젝트를 기획해야할때 기획에 주도적으로 참여하고 기획과 개발자의
          의견을 조율하여 프로젝트를 진행하였습니다. <br />
          <br />
          대화를 즐기며 기획자, 디자이너, 개발자와 함께 좋은, 편리한, 예쁜
          프로덕트를 만들어 나아가고 싶습니다.
        </div>
        <div className="caption">hankiseon</div>
      </div>
    </div>
  );
}
