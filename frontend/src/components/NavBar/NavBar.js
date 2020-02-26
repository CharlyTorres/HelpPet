import React from 'react'
// import { MyContext } from '../context'
import { Link, NavLink } from 'react-router-dom'
import { Flex, Menu, MenuButton, MenuList, MenuItem, Button, MenuOptionGroup } from '@chakra-ui/core'
import customTheme from '../../theme'

const styles = {
  style: {
    padding: '20px'
  },
  activeStyle: {
    color: 'white'
  },
}

export default function Navbar() {
  return (
   // <MyContext.Consumer>
     // {context => (
        <Flex {...styles}
          width="100vw"
          height="80px"
          bg= {customTheme.themeColors[100]}
          alignContent="center"
          justify="space-between"
          wrap="wrap"
          roundedBottomLeft="md" roundedBottomRight="md"
        >
            <NavLink {...styles} fontSize={["sm", "md", "lg", "xl"]} exact to="/">
                <img src="/images/logo.svg" alt="logo" width="50px"></img>
                HelPet
            </NavLink>

            <Menu >
        {({ isOpen }) => (
    <React.Fragment>
      <MenuButton marginTop="35px" bg={customTheme.themeColors[400]} isActive={isOpen} as={Button} rightIcon="chevron-down">
        {isOpen ? "Cerrar" : "Menú"}
      </MenuButton>
      <MenuList>
      <MenuOptionGroup defaultValue="asc" title="HelPet Menú" type="radio">
        <MenuItem>        
         <Link {...styles} fontSize={["sm", "md", "lg", "xl"]} exact to="/login">
                Iniciar Sesión
         </Link>
        </MenuItem>
        <MenuItem>        
         <Link {...styles} fontSize={["sm", "md", "lg", "xl"]} exact to="/signup">
                Registrate
         </Link>
        </MenuItem>
        <MenuItem>        
         <Link {...styles} fontSize={["sm", "md", "lg", "xl"]} exact to="/emergency">
                Emergencia Patitas
         </Link>
        </MenuItem>

        <MenuItem>        
         <Link {...styles} fontSize={["sm", "md", "lg", "xl"]} exact to="/adopt">
                Adopta
         </Link>
        </MenuItem>

        <MenuItem>        
         <Link {...styles} fontSize={["sm", "md", "lg", "xl"]} exact to="/give">
                Da en adopción
         </Link>
        </MenuItem>
        </MenuOptionGroup>
      </MenuList>
    </React.Fragment>
  )}
</Menu>
         {/*  {!context.state.isLoggedIn && (
            <>
              <NavLink {...styles} exact to="/">
                Home
              </NavLink>
              <NavLink {...styles} exact to="/signup">
                Signup
              </NavLink>
              <NavLink {...styles} exact to="/login">
                Login
              </NavLink>
            </>
          )}
          {context.state.isLoggedIn && (
            <>
              <NavLink {...styles} exact to="/">
                Home
              </NavLink>
              <NavLink {...styles} exact to="/profile">
                Profile
              </NavLink>
              <button style={styles.style}>Logout</button>
            </>
          )} */}
        </Flex>
      )}
   // </MyContext.Consumer>
 // )
//}