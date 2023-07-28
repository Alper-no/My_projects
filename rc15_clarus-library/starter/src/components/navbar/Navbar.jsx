import React from 'react'
import { menuIcon } from '../../helper/iconData'
import { Logo, MenuLink, Menu, Nav, HamburgerIcon  } from './Navbar.style'

const Navbar = () => {
  return (
    <Nav>Navbar
      <Logo> </Logo>
      <HamburgerIcon>

        {menuIcon}
      </HamburgerIcon>
      <Menu>
        <MenuLink>Home</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar