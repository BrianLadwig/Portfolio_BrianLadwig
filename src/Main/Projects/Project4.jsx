import { Link } from "react-router-dom";
import gitApiPic from "../../assets/ProjectPics/gitapi.png";
import style from "./Projects.module.scss";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { motion } from "framer-motion";

const Project4 = () => {
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
      <Link to="/Portfolio_BrianLadwig/project3" id={style.link}>
        <FaArrowCircleLeft />
      </Link>

      <div className={style.Projects__wrapper__projectCard__info}>
        <img src={gitApiPic} alt="" />

        <h2>Github Username API</h2>

        <p>
          A webpage to find repositories from a given Github username. The
          webpage enable the user to enter a Github username into a form and
          send this form to the Github API to retrieve a list of all the user's
          repositories.
        </p>

        <a
          href="https://brianladwig.github.io/Github-Username-API/"
          target="_blank"
        >
          <MdWeb />
          Webpage
        </a>

        <a
          href="https://github.com/BrianLadwig/Github-Username-API"
          target="_blank"
        >
          <BsGithub />
          Github
        </a>
      </div>

      <Link to="/Portfolio_BrianLadwig" id={style.link}>
        <FaArrowCircleRight />
      </Link>
    </motion.div>
  );
};

export default Project4;
