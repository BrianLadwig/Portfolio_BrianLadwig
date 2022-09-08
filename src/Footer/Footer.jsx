import style from "./Footer.module.scss"
import { BsGithub } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { FaXingSquare } from "react-icons/fa"

const Footer = () => {
  return <footer className={style.Footer}>
     <a href="https://github.com/BrianLadwig" target="_blank"><BsGithub/></a>
     <a href="https://www.linkedin.com/in/brian-ladwig-54976b1a1/" target="_blank"><AiFillLinkedin/></a>
     <a href="https://www.xing.com/profile/Brian_Ladwig2/cv" target="_blank"><FaXingSquare/></a>
  </footer>;
};


export default Footer