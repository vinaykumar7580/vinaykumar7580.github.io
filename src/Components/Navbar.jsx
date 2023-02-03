import style from "../Style/Navbar.module.css"
import ButtonMenu from "../Extra/ButtonMenu"

function Navbar(){
    return(
        <div  id="nav-menu" className={style.nav_section}>
            <div className={style.nav_section_first}>
                <h1>VinayKumar</h1>
            </div>
            <div className={style.nav_section_second}>
                <div className={style.nav_section_enter}>
                <a href="#home"><h3>Home</h3></a>
                <a href="#about"><h3>About</h3></a>
                <a href="#skills"><h3>Skills</h3></a>
                <a href="#projects"><h3>Projects</h3></a>
                <a href="#contact"><h3>Contact</h3></a>
                <a href="#"><h3>Resume</h3></a>
                </div>
                <div className={style.buttonMenu}>
                    <ButtonMenu/>
                </div>
            </div>
        </div>
    )
}
export default Navbar