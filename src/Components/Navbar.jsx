import style from "../Style/Navbar.module.css";
import ButtonMenu from "../Extra/ButtonMenu";
import {Link as NavLink} from "react-router-dom"
import * as Scroll from "react-scroll";

let Link = Scroll.Link;

function Navbar() {
    
  function downloadFile() {
    window.open(
      "https://drive.google.com/file/d/1nIZ22kphOha2cCJBm7Hao0AA4nwRk3eF/view?usp=sharing",
      "_blank"
    );
    const link = document.createElement("a");
    link.download = "Vinaykumar_Hatwar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
  }
  return (
    <div id="nav-menu" className={style.nav_link}>
      <div className={style.nav_section_first}>
        <h1>VinayKumar</h1>
      </div>
      <div className={style.nav_section_second}>
        <div className={style.nav_section_enter}>
          <Link
            className="nav-link home"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="nav-link about"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="nav-link skills"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            className="nav-link projects"
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="nav-link contact"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>

          <NavLink className="nav-link resume" to="https://drive.google.com/uc?export=download&id=1nIZ22kphOha2cCJBm7Hao0AA4nwRk3eF">
          
            <button
              id="resume-button-1"
              className={style.nav_section_enter}
              //href="Vinaykumar_Hatwar_Resume.pdf"
              //target="_blank"
             // download={true}
              //rel="noreferror"
              onClick={downloadFile}
            >
              Resume
            </button>
           
          </NavLink>
        </div>
        <div className={style.buttonMenu}>
          <ButtonMenu />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
