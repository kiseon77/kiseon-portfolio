import "./contact.scss";

export default function Contact() {
  return (
    <section className="container_20">
      <div className="inner">
        <h4>
          안녕하세요 프론트엔드 개발자, <br />
          <span>한기선</span>입니다.
        </h4>
        <p>함께 성장하며 가치를 더해나가겠습니다. 언제든 연락 주세요!</p>
        <div className="talkBtn">
          <a href="mailto:kiseon.han77@gmail.com?subject=Portfolio Inquiry&body=Hello!">
            <span></span>
          </a>
        </div>
        <div className="border"></div>
        <ul className="sns">
          <li>
            <a href="https://github.com/kiseon77" target="_blank">
              github
            </a>
          </li>
          <li>
            <a href="https://kiseon77.github.io/" target="_blank">
              blog
            </a>
          </li>
          <li>
            <a href="https://kiseon.notion.site/development" target="_blank">
              profile
            </a>
          </li>
          <li>
            <a href="mailto:kiseon.han77@gmail.com?subject=Portfolio Inquiry&body=Hello!">
              email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
