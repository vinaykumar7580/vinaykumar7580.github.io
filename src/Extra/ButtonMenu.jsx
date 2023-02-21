
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton
  } from '@chakra-ui/react'
  import {HamburgerIcon,EditIcon} from "@chakra-ui/icons"
  import * as Scroll from 'react-scroll';
  import vinaykumar from './Vinaykumar_Hatwar_Resume.pdf'
  let Link=Scroll.Link

function ButtonMenu(){
  function downloadFile() {
    let link = document.createElement("a");
    link.download = "Vinaykumar_Hatwar_Resume.pdf";
    link.href = vinaykumar;
    link.click();
    link.remove();
  }

    return(
        <div>
            <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    color={'black'}
    variant='outline'
  />
  <MenuList>
    <Link activeClass="nav_link" to="home" spy={true} smooth={true} offset={50} duration={500}>
    <MenuItem icon={<EditIcon/>} color={'black'}>
    <h3>Home</h3>
    </MenuItem>
    </Link>
    <Link activeClass="nav_link" to="about" spy={true} smooth={true} offset={50} duration={500}>
    <MenuItem icon={<EditIcon/>} color={'black'}>
    <h3>About</h3>
    </MenuItem>
    </Link>
    <Link activeClass="nav_link" to="skills" spy={true} smooth={true} offset={50} duration={500}>
    <MenuItem icon={<EditIcon/>} color={'black'}>
    <h3>Skills</h3>
    </MenuItem>
    </Link>
    <Link activeClass="nav_link" to="projects" spy={true} smooth={true} offset={50} duration={500}>
    <MenuItem icon={<EditIcon/>} color={'black'}>
    <h3>Projects</h3>
    </MenuItem>
    </Link>
    <Link activeClass="nav_link" to="contact" spy={true} smooth={true} offset={50} duration={500}>
    <MenuItem icon={<EditIcon/>} color={'black'}>
    <h3>Contact</h3>
    </MenuItem>
    </Link>
    <MenuItem icon={<EditIcon/>} color={'black'}>
    <button id="resume-button-1" onClick={() => {
                  // window.location.href =
                  //   "https://drive.google.com/file/d/1nIZ22kphOha2cCJBm7Hao0AA4nwRk3eF/view?usp=sharing";
                  downloadFile();
      }}>Resume</button>
    </MenuItem>
    
  </MenuList>
</Menu>

        </div>
    )
}
export default ButtonMenu