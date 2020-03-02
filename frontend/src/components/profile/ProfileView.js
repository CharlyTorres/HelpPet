import React from 'react'
import { MyContext } from '../../context'
import { Box, Image, Flex, Input, Button, Heading } from '@chakra-ui/core'
import { FaCloudUploadAlt } from "react-icons/fa";
import customTheme from '../../theme'
import PetProfileCard from '../Pet/Profile'


function ProfileView({user}) {
  const changePic = () => {
    document.getElementById('profilePic').click()
  }
  return (
    <MyContext.Consumer>
      {context => {
        if (!context.state.loggedUser) return null
        else {
        return (
          <Flex flexDirection="column" w="100%" alignContent="center" justifyContent="center">
          <Flex w="100%" justifyContent="center">
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
          <Box>
          <Heading>Tus mascotas en adopción</Heading>
          <PetProfileCard></PetProfileCard>
          </Box>
         </Flex>

        )}
      }}
    </MyContext.Consumer>
  )
}

export default ProfileView