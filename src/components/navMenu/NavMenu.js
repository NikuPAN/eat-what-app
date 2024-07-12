import { ChakraProvider } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Link, useLocation } from 'react-router-dom';

const NavMenu = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <ChakraProvider>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList>
          <MenuItem>
            <Link to="/random">Random</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/list">Restaurant List</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      {!isHomePage &&       
        <Link to="/">
          <Button leftIcon={<ArrowBackIcon />} colorScheme="teal">Return To Home</Button>
        </Link>
      }
    </ChakraProvider>
  )
};

export default NavMenu;
