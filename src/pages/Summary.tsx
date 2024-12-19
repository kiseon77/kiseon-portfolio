import "./Summary.scss";
export default function Summary() {
  const myName = "KISEON";

  return (
    <>
      <div className="mainTitle">
        프로덕트를 즐기는
        <br />
        개발자 한기선
      </div>
      <p className="subTitle">
        <span>UX/UI디자이너에서</span> <br /> 프론트엔드 개발자로!
      </p>
      <div className="moveName">
        {[...myName].map((Spelling) => {
          return <div className={Spelling}>{Spelling}</div>;
        })}
      </div>
      <div className="summary">
        <div className="fromDesigner">
          디자이너에서 프론트엔드 개발자로 도전하고 있습니다.
        </div>
        <div className="slogan">UX/UI디자이너에서 프론트엔드 개발자로!</div>
        <div className="toDeveloper">
          무엇이든 관심이 생기면 빠르게 도전하고 실행합니다.
        </div>
        <div className="caption">한기선</div>
      </div>
    </>
  );
}
