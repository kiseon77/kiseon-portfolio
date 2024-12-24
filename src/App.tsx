import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Main from "./pages/Summary";
import Layout from "@layouts/Layout";
import Education from "./pages/Education";
import WorkExperience from "./pages/WorkExperience";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Detail from "./pages/Projects/Detail";
import { useEffect, useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <>
      <Layout>
        <Main />
        <Education />
        <WorkExperience />
        <Project handleModal={handleModal} />
        <Contact />
      </Layout>
      {isOpen && <Detail handleModal={handleModal} />}
    </>
  );
}
export default App;
