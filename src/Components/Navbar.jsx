import style from "../Style/Navbar.module.css"
import ButtonMenu from "../Extra/ButtonMenu"
import * as Scroll from 'react-scroll';
let Link=Scroll.Link

function Navbar(){
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
                <a href="Vinaykumar_Hatwar_Resume..pdf" download><h3>Resume</h3></a>
                </div>
                <div className={style.buttonMenu}>
                    <ButtonMenu/>
                </div>
            </div>
        </div>
    )
}
export default Navbar