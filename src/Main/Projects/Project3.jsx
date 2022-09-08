import { Link } from "react-router-dom";
import identipic from "../../assets/ProjectPics/Identyfit.png";
import style from "./Projects.module.scss";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { motion } from "framer-motion";

const Project3 = () => {
  const containerVariants = {
    init: {
      opacity: 0,
    },
    anim: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className={style.Projects__wrapper__projectCard}
      variants={containerVariants}
      initial="init"
      animate="anim"
      exit="exit"
    >
      <Link to="/Portfolio_BrianLadwig/project2" id={style.link}>
        <FaArrowCircleLeft />
      </Link>

      <div className={style.Projects__wrapper__projectCard__info}>
        <img src={identipic} alt="" />

        <h2>IDENTYfit</h2>

        <p>
          My first real life project. It's a minimalistic web page with just
          HTML and CSS and a very small js file, to showcase a little workshop
          business.
        </p>

        <a href="https://brianladwig.github.io/IDENTYfit/" target="_blank">
          <MdWeb />
          Webpage
        </a>

        <a href="https://github.com/BrianLadwig/IDENTYfit" target="_blank">
          <BsGithub />
          Github
        </a>
      </div>

      <Link to="/Portfolio_BrianLadwig/project4" id={style.link}>
        <FaArrowCircleRight />
      </Link>
    </motion.div>
  );
};

export default Project3;
