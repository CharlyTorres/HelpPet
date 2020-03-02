import React from 'react'
import { MyContext } from '../../context'
import { Box, Image, Flex, PseudoBox, Heading} from '@chakra-ui/core'
import { FaHeart } from "react-icons/fa";
import customTheme from '../../theme'


function PetProfileCard() {    

  return(

    <MyContext.Consumer>

    {context => {
      return(
    <Flex w="100%" justifyContent="center">
    <Box>
      {context.state.loggedUser.animals.map(e => {
              return(
          <Flex key={e._id} w="100%"  textAlign="center" justifyContent="center">
   <PseudoBox   rounded="md" w="80vw" bg={customTheme.themeColors[200]} marginBottom="20px">
                <Flex justifyContent="center">
                <Box w={["100%", "md", "lg", "40%"]}>
                <Flex w="100%" justifyContent="center">
                <Image rounded="lg" marginTop="10px" src={e.photoURL} alt="imagen"></Image>
                </Flex>
                <Box textAlign="left">
                <Flex h="65px" alignItems="center">
                </Flex>
               <Heading leftIcon={FaHeart} fontSize="20px">Nombre: {e.name}</Heading>
               
               <Heading fontSize={["15px", "md", "lg", "xl"]}>Edad: {e.age}</Heading>
               <Heading fontSize={["15px", "md", "lg", "xl"]}>Tamaño: {e.size}</Heading>
               <Heading fontSize={["15px", "md", "lg", "xl"]}>Vacunado: {e.vaccine}</Heading>
               <Heading fontSize={["15px", "md", "lg", "xl"]}>Desparasitado: {e.dewormed}</Heading>
               <Heading fontSize={["15px", "md", "lg", "xl"]}>Esterilizado: {e.sterilized}</Heading>
               <Heading fontSize={["15px", "md", "lg", "xl"]}>Descripción: {e.description}</Heading>
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

export default PetProfileCard