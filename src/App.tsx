import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Main from "./pages/Summary";
import Layout from "@layouts/Layout";
import Education from "./pages/Education";
import WorkExperience from "./pages/WorkExperience";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Layout>
        <Main />
        <Education />
        <WorkExperience />
        <Project />
        <Contact />
      </Layout>
    </>
  );
}
export default App;
