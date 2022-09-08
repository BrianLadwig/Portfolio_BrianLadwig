import style from "./Home.module.scss";
import { motion } from "framer-motion";

const Home = () => {
  const olVariant = {
    init: { x: "-20px", y: "-20px" },
    anim: { x: 0, y: 0, transition: { duration: 0.5 } },
  };

  const ulVariant = {
    init: { x: "-20px", y: "20px" },
    anim: { x: 0, y: 0, transition: { duration: 0.5 } },
  };

  const orVariant = {
    init: { x: "20px", y: "-20px" },
    anim: { x: 0, y: 0, transition: { duration: 0.5 } },
  };

  const urVariant = {
    init: { x: "20px", y: "20px" },
    anim: { x: 0, y: 0, transition: { duration: 0.5 } },
  };

  const titleVariant = {
    init: { scale: 0 },
    anim: { scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className={style.Home} id="home">
      <motion.div
        className={style.Home__corner}
        id={style.ol}
        variants={olVariant}
        initial="init"
        animate="anim"
      ></motion.div>
      <motion.div
        className={style.Home__corner}
        id={style.ul}
        variants={ulVariant}
        initial="init"
        animate="anim"
      ></motion.div>
      <motion.div
        className={style.Home__corner}
        id={style.or}
        variants={orVariant}
        initial="init"
        animate="anim"
      ></motion.div>
      <motion.div
        className={style.Home__corner}
        id={style.ur}
        variants={urVariant}
        initial="init"
        animate="anim"
      ></motion.div>

      <div className={style.Home__Titel}>
        <p>Hey, my name is Brian and I'm a</p>
        <motion.h1 variants={titleVariant} animate="anim" initial="init">
          Webdeveloper
        </motion.h1>
        <p>open for Jobs</p>
      </div>
    </section>
  );
};

export default Home;
