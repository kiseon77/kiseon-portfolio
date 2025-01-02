import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Main from "./pages/Summary";
import Layout from "@layouts/Layout";
import Education from "./pages/Education";
import WorkExperience from "./pages/WorkExperience";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Detail from "./pages/Projects/Detail";
import { useEffect, useRef, useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeProj, setActiveProj] = useState<number | null>(null);

  const mainRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const workExperienceRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const handleModal = (projId: number | null) => {
    setIsOpen((prev) => !prev);
    setActiveProj(projId);
  };
  const scrollToSection = (section: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLElement>> = {
      main: mainRef,
      education: educationRef,
      workExperience: workExperienceRef,
      project: projectRef,
      contact: contactRef,
    };
    const targetRef = sectionMap[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
      <Layout onMenuClick={scrollToSection}>
        <main ref={mainRef}>
          <Main />
        </main>
        <section ref={educationRef}>
          <Education />
        </section>
        <section ref={workExperienceRef}>
          <WorkExperience />
        </section>
        <section ref={projectRef}>
          <Project handleModal={handleModal} />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </Layout>
      {isOpen && <Detail handleModal={handleModal} activeProj={activeProj} />}
    </>
  );
}
export default App;
