import { useState } from "react";
import "./nav.scss";
export default function Nav() {
  const [isOpen, _setIsOpen] = useState<boolean>(false);
  return (
    <nav className="menuContainer">
      <div className="menuBar">{isOpen ? "CLOSE" : "OPEN"}</div>
    </nav>
  );
}
