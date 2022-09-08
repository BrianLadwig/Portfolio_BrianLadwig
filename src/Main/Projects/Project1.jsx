import { Link } from "react-router-dom";
import LokaPic from "../../assets/ProjectPics/Loka2.png";
import style from "./Projects.module.scss";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { motion } from "framer-motion"

const Project1 = () => {

  const containerVariants = {
  init: {
    opacity: 0,
  },
  anim: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
};

  return (
      
    <motion.div className={style.Projects__wrapper__projectCard} variants={containerVariants}
      initial="init"
      animate="anim"
      exit="exit">
      <Link to="/Portfolio_BrianLadwig/project4" id={style.link}>
        <FaArrowCircleLeft />
      </Link>

      <div className={style.Projects__wrapper__projectCard__info}>
        <img src={LokaPic} alt="" />

        <h2>Loka App</h2>

        <p>
        This Project is our Final Project of the one year fullstack web developer course at DCI Digital Career Institute gGmbH.

The Project take place from the 30th of May to the 19th of July, 2022.
        </p>

<a href="https://loka.vercel.app/" target="_blank">
          <MdWeb />
          Webpage
        </a>

        <a href="https://github.com/BrianLadwig/BAIM_frontend" target="_blank">
          <BsGithub />
          Github Frontend
        </a>

        <a href="https://github.com/BrianLadwig/BAIM-backend/tree/main" target="_blank">
          <BsGithub />
          Github Backend
        </a>

        

      </div>

      <Link to="/Portfolio_BrianLadwig/project2" id={style.link}>
        <FaArrowCircleRight />
      </Link>

    </motion.div>
  );
};

export default Project1;
