import React from 'react'
import { MyContext } from '../../context'
import { Box, Image, Flex, Button, PseudoBox, Heading, Avatar,Popover, PopoverArrow, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverBody,PopoverHeader } from '@chakra-ui/core'
import { FaHeart } from "react-icons/fa";
import customTheme from '../../theme'


function DogCard() {
    

    return(

        <MyContext.Consumer>
    
        {context => {
          return(
        <Flex w="100%" justifyContent="center">
        <Box>
          {context.state.dogs.map(e => {
                  return(
              <Flex key={e._id} w="100%"  textAlign="center" justifyContent="center">
       <PseudoBox   w="80vw" rounded="md" bg={customTheme.themeColors[200]} marginBottom="20px">
                    <Flex justifyContent="center">
                    <Box w={["100%", "md", "lg", "40%"]}>
                    <Flex w="100%" justifyContent="center">
                    <Image rounded="lg" marginTop="10px" src={e.photoURL} alt="imagen"></Image>
                    </Flex>
                    <Box textAlign="left">
                    <Flex h="65px" alignItems="center">
                    <Heading color="white" fontSize={["15px", "md", "lg", "xl"]}>Dueño: 
                    <Avatar
                     src={e.giver.photoURL}
                     size="sm"
                     name=""
                     ml={1}
                     mr={1}
                /> 
                {e.giver.name}</Heading>
                </Flex>
                   <Heading leftIcon={FaHeart} fontSize="20px">Nombre: {e.name}</Heading>
                   <Heading fontSize={["15px", "md", "lg", "xl"]}>Dueño: {e.giver.name}</Heading>
                   <Heading fontSize={["15px", "md", "lg", "xl"]}>Edad: {e.age}</Heading>
                   <Heading fontSize={["15px", "md", "lg", "xl"]}>Tamaño: {e.size}</Heading>
                   <Heading fontSize={["15px", "md", "lg", "xl"]}>Vacunado: {e.vaccine}</Heading>
                   <Heading fontSize={["15px", "md", "lg", "xl"]}>Desparasitado: {e.dewormed}</Heading>
                   <Heading fontSize={["15px", "md", "lg", "xl"]}>Esterilizado: {e.sterilized}</Heading>
                   <Heading fontSize={["15px", "md", "lg", "xl"]}>Descripción: {e.description}</Heading>
                   <Popover w="100%">
                 <PopoverTrigger >
                 <Flex w="100%" justifyContent="center">
                  <Button leftIcon={FaHeart} bg={customTheme.themeColors[400]}>Adoptame!</Button>
                 </Flex>
                 </PopoverTrigger>
                <PopoverContent  zIndex={4}>
                  <PopoverArrow  />
                  <PopoverCloseButton />
                  <PopoverHeader >Datos de contacto para adopción</PopoverHeader>
                  <PopoverBody >
                   <Image rounded="full" w="100%" src={e.giver.photoURL}></Image>
                   <Heading fontSize={["15px", "md", "lg", "xl"]}>Nombre: {e.giver.name}</Heading>
                   <Heading fontSize={["15px", "md", "lg", "xl"]}>Telefono: {e.giver.tel}</Heading>
                   <Heading fontSize={["15px", "md", "lg", "xl"]}>Correo elctrónico: {e.giver.email}</Heading>
                   <Heading fontSize={["15px", "md", "lg", "xl"]}>Ubicación: {e.giver.state}</Heading>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
                   </Box>
                   </Box>
                   </Flex>
      </PseudoBox>
              </Flex>
                  )
                })}
        </Box>
      </Flex>
        )}
        }
        </MyContext.Consumer>
      )
    }
    


export default DogCard