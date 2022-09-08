import style from "./Header.module.scss";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Typewriter from "typewriter-effect";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={style.Header}>
      <div className={style.Header__content}>
        <h2>
          {" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Brian.Ladwig;").start();
            }}
          />
        </h2>
        <nav
          className={`${style.Header__content__nav} ${
            menuOpen ? style.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#skills">skills</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
          </ul>
        </nav>
        <div className={style.Header__content__toggle}>
          {!menuOpen ? (
            <FiMenu onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
