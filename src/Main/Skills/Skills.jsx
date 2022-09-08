import style from "./Skills.module.scss";
import reactLogo from "../../assets/SVGs/react-2.svg";
import bootstrapLogo from "../../assets/SVGs/bootstrap-4.svg";
import cssLogo from "../../assets/SVGs/css-3.svg";
import expressLogo from "../../assets/SVGs/express-109.svg";
import framerMotionLogo from "../../assets/SVGs/framer-motion.svg";
import gitLogo from "../../assets/SVGs/git-icon.svg";
import githubLogo from "../../assets/SVGs/github-icon-1.svg";
import htmlLogo from "../../assets/SVGs/html-1.svg";
import jsLogo from "../../assets/SVGs/logo-javascript.svg";
import mongodbLogo from "../../assets/SVGs/mongodb-icon-1.svg";
import nodeLogo from "../../assets/SVGs/nodejs.svg";
import npmLogo from "../../assets/SVGs/npm.svg";
import sassLogo from "../../assets/SVGs/sass-1.svg";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className={style.Skills} id="skills">
      <h1>Skills</h1>

      <div className={style.Skills__logoWrapper}>
        <motion.img src={gitLogo} alt="Git Logo" drag />
        <motion.img src={githubLogo} alt="Github Logo" drag />
        <motion.img src={htmlLogo} alt="Html Logo" drag />
        <motion.img src={cssLogo} alt="Css Logo" drag />
        <motion.img src={sassLogo} alt="Sass Logo" drag />
        <motion.img src={bootstrapLogo} alt="BootstrapLogo" drag />
        <motion.img src={jsLogo} alt="Javascript Logo" drag />
        <motion.img src={npmLogo} alt="npm Logo" drag />
        <motion.img src={reactLogo} alt="React Logo" drag />
        <motion.img src={nodeLogo} alt="node Logo" drag />
        <motion.img src={framerMotionLogo} alt="Framer Motion Logo" drag />
        <motion.img src={expressLogo} alt="Express Logo" drag />
        <motion.img src={mongodbLogo} alt="MongoDB Logo" drag />
      </div>
    </section>
  );
};

export default Skills;
