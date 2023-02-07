
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
  let Link=Scroll.Link

function ButtonMenu(){
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
    <a href="Vinaykumar_Hatwar_Resume..pdf" download><MenuItem icon={<EditIcon/>} color={'black'}>
    <h3>Resume</h3>
    </MenuItem></a>
  </MenuList>
</Menu>

        </div>
    )
}
export default ButtonMenu