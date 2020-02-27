import React from 'react'
import { MyContext } from '../../context'
import { Box, Image, Flex } from '@chakra-ui/core'

function ProfileView() {
  return (
    <MyContext.Consumer>
      {context => {
        if (!context.state.loggedUser) return null
        else {
        return (
          <Flex w="100%" alignContent="center" justifyContent="center">
          <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
            <Image
              src={context.state.loggedUser.photoURL}
              alt={context.state.loggedUser.name}
            />
            <h1>Nombre: {context.state.loggedUser.name}</h1>
            <h1>Estado: {context.state.loggedUser.state}</h1>
            <h1>Edad: {context.state.loggedUser.age} años</h1>
            </Box>
          
         </Flex>

        )}
      }}
    </MyContext.Consumer>
  )
}

export default ProfileView