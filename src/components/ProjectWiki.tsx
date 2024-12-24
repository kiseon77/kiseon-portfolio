import { useState } from "react";
import "./component.scss";

export default function ProjectWiki() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="projectWikiContainer">
      <button className="toggle-btn" onClick={togglePanel}>
        {isOpen ? "Close Panel" : "Open Panel"}
      </button>
      <div className={`panel ${isOpen ? "open" : "closed"}`}>
        <p>This is the content inside the panel.</p>
      </div>
    </div>
  );
}
