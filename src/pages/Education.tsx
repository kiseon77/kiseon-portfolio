import { useEffect, useRef } from "react";
import "./education.scss";
import { gsap } from "gsap";

export default function Education() {
  const eduList = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (eduList.current) {
      const items = eduList.current.querySelectorAll("li");
      let textAni = gsap.timeline({ repeat: -1 });
      items.forEach((item) => {
        textAni.to(item, {
          opacity: 1,
          repeat: 1,
          duration: 0.8,
          delay: 0,
          x: 0,
          yoyo: true,
          ease: "power4.out",
        });
      });
    }
  }, []);
  return (
    <div className="textCarousel">
      <ul ref={eduList}>
        <li>
          <p>
            고졸 검정고시 <br />
            <span>2018.05</span>
          </p>
        </li>
        <li>
          <p>
            충청대학교 시각디자인과 <br />
            <span>2020.03 ~ 2022.02</span>
          </p>
        </li>
        <li>
          <p>
            서울사이버대학교 멀티미디어디자인과 <br />
            <span>2023.03 ~ 2024.02</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
