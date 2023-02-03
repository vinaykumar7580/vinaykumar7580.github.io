
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

function ButtonMenu(){
    return(
        <div>
            <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
   <a href="#home"><MenuItem icon={<EditIcon/>}>
    <h3>Home</h3>
    </MenuItem></a>
    <a href="#about"><MenuItem icon={<EditIcon/>}>
    <h3>About</h3>
    </MenuItem></a>
    <a href="#skills"><MenuItem icon={<EditIcon/>}>
    <h3>Skills</h3>
    </MenuItem></a>
    <a href="#projects"><MenuItem icon={<EditIcon/>}>
    <h3>Projects</h3>
    </MenuItem></a>
    <a href="#contact"><MenuItem icon={<EditIcon/>}>
    <h3>Contact</h3>
    </MenuItem></a>
    <a href="#"><MenuItem icon={<EditIcon/>}>
    <h3>Resume</h3>
    </MenuItem></a>
  </MenuList>
</Menu>

        </div>
    )
}
export default ButtonMenu