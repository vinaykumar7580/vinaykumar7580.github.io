import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, EditIcon } from "@chakra-ui/icons";
import * as Scroll from "react-scroll";
import vinaykumar from "./Vinaykumar_Hatwar_Resume.pdf";
import { useState } from "react";
let Link = Scroll.Link;

function ButtonMenu() {
  // const [nav,setNav]=useState(false)
  // const handleClick=()=>{
  //   setNav(!nav)
  // }

  function downloadFile() {
    window.open(
      "https://drive.google.com/file/d/1nIZ22kphOha2cCJBm7Hao0AA4nwRk3eF/view?usp=sharing",
      "_blank"
    );
    const link = document.createElement("a");
    link.download = "Vinaykumar_Hatwar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    // setNav(!nav)
  }

  return (
    <div>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          color={"black"}
          variant="outline"
        />
        <MenuList>
        <Link className="nav-link home"  to="home"  smooth={true}  duration={500}>
            <MenuItem icon={<EditIcon />} color={"black"}>
              <h3>Home</h3>
            </MenuItem>
          </Link>
          <Link className="nav-link about" to="about"  smooth={true}  duration={500}>
            <MenuItem icon={<EditIcon />} color={"black"}>
              <h3>About</h3>
            </MenuItem>
          </Link>
          <Link className="nav-link skills" to="skills"  smooth={true}  duration={500}>
            <MenuItem icon={<EditIcon />} color={"black"}>
              <h3>Skills</h3>
            </MenuItem>
          </Link>
          <Link className="nav-link projects" to="projects"  smooth={true}  duration={500}>
            <MenuItem icon={<EditIcon />} color={"black"}>
              <h3>Projects</h3>
            </MenuItem>
          </Link>
          <Link className="nav-link contact" to="contact"  smooth={true}  duration={500}>
            <MenuItem icon={<EditIcon />} color={"black"}>
              <h3>Contact</h3>
            </MenuItem>
          </Link>
          <MenuItem className="nav-link resume" color={"black"}>
                <a id="resume-button-1" href="Vinaykumar_Hatwar_Resume.pdf" target="_blank" download={true} rel="noreferror" onClick={downloadFile}><EditIcon /> Resume</a>
          </MenuItem>
          
        </MenuList>
      </Menu>
    </div>
  );
}
export default ButtonMenu;
