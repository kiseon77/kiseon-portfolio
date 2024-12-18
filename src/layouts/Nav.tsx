import { useState } from "react";
import "./nav.scss";
export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="menuContainer">
      <div className="menuBar">{isOpen ? "CLOSE" : "OPEN"}</div>
    </nav>
  );
}
