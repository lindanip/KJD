import React from 'react'
import { Menu, NavLink, NavLinks, NavigationBar, Button } from './styles'

function TopNavigation() {
  return (
    <Menu>
      <NavigationBar>
        <div>
          LOGO
        </div>
        <NavLinks>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">Industries</NavLink>
          <NavLink href="#">Cases</NavLink>
          <NavLink href="#">Contact</NavLink>
        </NavLinks>
        <Button>
          Let's talk
        </Button>
      </NavigationBar>
    </Menu>
  )
}

export default TopNavigation