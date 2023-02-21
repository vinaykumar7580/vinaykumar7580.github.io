import style from "../Style/Navbar.module.css"
import ButtonMenu from "../Extra/ButtonMenu"
import * as Scroll from 'react-scroll';
import vinaykumar from './Vinaykumar_Hatwar_Resume.pdf'
let Link=Scroll.Link


function Navbar(){
    function downloadFile() {
        let link = document.createElement("a");
        link.download = "Vinaykumar_Hatwar_Resume.pdf";
        link.href = vinaykumar;
        link.click();
        link.remove();
      }
    return(
        <div  id="nav-menu" className={style.nav_link} >
            <div className={style.nav_section_first}>
                <h1>VinayKumar</h1>
            </div>
            <div className={style.nav_section_second}>
                <div className={style.nav_section_enter}>
                <Link activeClass="nav_link" to="home" spy={true} smooth={true} offset={50} duration={500}>
                   Home
                </Link>
                <Link activeClass="nav_link" to="about" spy={true} smooth={true} offset={50} duration={500}>
                   About
                </Link>
                <Link activeClass="nav_link" to="skills" spy={true} smooth={true} offset={50} duration={500}>
                   Skills
                </Link>
                <Link activeClass="nav_link" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                   Projects
                </Link>
                <Link activeClass="nav_link" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                   Contact
                </Link>
                {/* <a href="Vinaykumar_Hatwar_Resume..pdf" download><h3>Resume</h3></a> */}
                <button id="resume-button-1" className={style.nav_section_enter} onClick={() => {
                  window.location.href =
                    "https://drive.google.com/file/d/1nIZ22kphOha2cCJBm7Hao0AA4nwRk3eF/view?usp=sharing";
                  downloadFile();
                }}>Resume</button>
                </div>
                <div className={style.buttonMenu}>
                    <ButtonMenu/>
                </div>
            </div>
        </div>
    )
}
export default Navbar