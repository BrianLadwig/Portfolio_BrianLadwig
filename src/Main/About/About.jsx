import style from "./About.module.scss";
import photo from "../../assets/IMG_20220804_091047_158.jpg";
import { motion } from "framer-motion";

const About = () => {
  const downloadBtn = () => {
    fetch("PortfolioCV.pdf").then((response) => {
      response.blob().then((blob) => {
        //https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "PortfolioCV.pdf";
        alink.click();
      });
    });
  };

  return (
    <section className={style.About} id="about">
      <div className={style.About__wraper}>
        <h1>About</h1>
        <div className={style.About__wraper__content}>
          <img src={photo} />
          <p>
            I am on my path to become a fullstack webdeveloper. My curiosity in
            design and aesthetics as well as my interest for science and logic
            based subjects in general are perfect attributes for that matter.
            Therefore I feel at home in web development. Also, my desire to
            always learn more and new things is well served in this field.
            <br />
            I just graduating from a one-year intensive course in this field.
            Now looking for an exciting opportunity to expand my skillset while
            rendering a meaningful contribution.
            <br />
            When I am not coding, I am a musician, practicing several
            instruments and am playing around with music production.
          </p>

          <motion.button onClick={downloadBtn} whileTap={{ scale: 0.8 }}>
            Download CV{" "}
          </motion.button>
          
        </div>
      </div>
    </section>
  );
};

export default About;
