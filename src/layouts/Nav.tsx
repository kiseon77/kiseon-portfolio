import { useState } from "react";
import "./nav.scss";
export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className={`menuContainer ${isOpen ? "show" : ""}`}>
      <div className={`menuBarContainer`}>
        <div
          className="menuBar"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <div className="menuBarAsset"></div>
          <p> {isOpen ? "CLOSE" : "OPEN"}</p>
        </div>
      </div>
      {isOpen && (
        <div className="menuListContainer">
          <ul>
            <li>
              <a href="">Summary</a>
            </li>
            <li>
              <a href="">Education</a>
            </li>
            <li>
              <a href="">Work Experience</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
