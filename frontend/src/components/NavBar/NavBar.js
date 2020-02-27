import React from 'react'
// import { MyContext } from '../context'
import { Link, NavLink } from 'react-router-dom'
import { Flex, Menu, MenuButton, MenuList, MenuItem, Button, MenuOptionGroup } from '@chakra-ui/core'
import customTheme from '../../theme'
import { MyContext } from '../../context'

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
    <MyContext.Consumer>
      {context => (
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
      {!context.state.isLogged && (
        <>
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
        </>
      )}

      {context.state.isLogged && (
        <>
        <MenuItem>        
         <Link {...styles} fontSize={["sm", "md", "lg", "xl"]} exact to="/profile">
                Perfil
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
        <MenuItem onClick={context.handleLogout}>
                Cerrar Sesión
        </MenuItem>
        </>
      )}
        </MenuOptionGroup>
      </MenuList>
    </React.Fragment>
  )}
</Menu>
        </Flex>
      )}
    </MyContext.Consumer>
 )
}