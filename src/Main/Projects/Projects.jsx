import style from "./Projects.module.scss";
import Project1 from "./Project1.jsx";
import Project2 from "./Project2.jsx";
import Project3 from "./Project3.jsx";
import Project4 from "./Project4.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Projects = () => {
  const location = useLocation();

  return (
    <section className={style.Projects} id="projects">
      <h1>Projects</h1>

      <div className={style.Projects__wrapper}>
        <AnimatePresence exitBeforEnter>
          <Routes location={location} key={location.key} >
            <Route path="/Portfolio_BrianLadwig" element={<Project1 />} />
            <Route path="/Portfolio_BrianLadwig/project2" element={<Project2 />} />
            <Route path="/Portfolio_BrianLadwig/project3" element={<Project3 />} />
            <Route path="/Portfolio_BrianLadwig/project4" element={<Project4 />} />
          </Routes>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
