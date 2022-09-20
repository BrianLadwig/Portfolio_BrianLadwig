import { Link } from 'react-router-dom'
import chefBrianPic from '../../assets/ProjectPics/ChefBrian2.png'
import style from './Projects.module.scss'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md'
import { motion } from 'framer-motion'

const Project2 = () => {
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
      transition: { ease: 'easeInOut' },
    },
  }

  return (
    <motion.div
      className={style.Projects__wrapper__projectCard}
      variants={containerVariants}
      initial="init"
      animate="anim"
      exit="exit"
    >
      <div className={style.Projects__wrapper__projectCard__info}>
        <img src={chefBrianPic} alt="" />

        <h2>Chef Brain</h2>

        <p>
          A recipes organiser application, created with React. The user should
          be able to create a user, create recipes and toggle favorites. <br />
          !work in progress!
        </p>

        <a href="https://brianladwig.github.io/RecipeApp/" target="_blank">
          <MdWeb />
          Webpage
        </a>

        <a href="https://github.com/BrianLadwig/RecipeApp" target="_blank">
          <BsGithub />
          Github Frontend
        </a>

        <a
          href="https://github.com/BrianLadwig/RecipeApp-Backend"
          target="_blank"
        >
          <BsGithub />
          Github Backend
        </a>

        <div
          className={style.Projects__wrapper__projectCard__info__toggleProjects}
        >
          <Link to="/Portfolio_BrianLadwig/" id={style.link}>
            <FaArrowCircleLeft />
          </Link>

          <Link to="/Portfolio_BrianLadwig/project3" id={style.link}>
            <FaArrowCircleRight />
          </Link>

        </div>
      </div>
    </motion.div>
  )
}

export default Project2
