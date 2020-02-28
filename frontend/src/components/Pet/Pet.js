import React from 'react'
import { MyContext } from '../../context'
import { Box, Image, Flex, Input, Button } from '@chakra-ui/core'
import { FaCloudUploadAlt } from "react-icons/fa";
import customTheme from '../../theme'


function Adopt() {
  const changePic = () => {
    document.getElementById('profilePic').click()
  }
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
            <Button bg={customTheme.themeColors[500]} leftIcon={FaCloudUploadAlt} onClick={changePic}>Cambiar foto de perfil</Button>
            <Input display="none" id="profilePic" name="photoURL" onChange={context.handleFile} type="file" />
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

export default Adopt