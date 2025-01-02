import { useState } from "react";
import "./nav.scss";

interface NavProps {
  onMenuClick: (section: string) => void;
}

export default function Nav({ onMenuClick }: NavProps) {
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
              <button onClick={() => onMenuClick("main")}>Summary</button>
            </li>
            <li>
              <button onClick={() => onMenuClick("education")}>
                Education
              </button>
            </li>
            <li>
              <button onClick={() => onMenuClick("workExperience")}>
                Experience & Work
              </button>
            </li>
            <li>
              <button onClick={() => onMenuClick("project")}>Project</button>
            </li>
            <li>
              <button onClick={() => onMenuClick("contact")}>Contact</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
