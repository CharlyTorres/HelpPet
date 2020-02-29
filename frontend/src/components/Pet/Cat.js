import React from 'react'
import { MyContext } from '../../context'
import { Box, Image, Flex, Button, PseudoBox, Heading} from '@chakra-ui/core'
import { FaHeart } from "react-icons/fa";
import customTheme from '../../theme'


function CatCard() {
    

  return(

    <MyContext.Consumer>

    {context => {
      return(
    <Flex w="100%" justifyContent="center">
    <Box>
      {context.state.cats.map(e => {
              return(
          <Flex w="100%"  textAlign="center" justifyContent="center">
   <PseudoBox   rounded="md" w="80vw" bg={customTheme.themeColors[200]} marginBottom="20px">
                <Flex justifyContent="center">
                <Box w={["100%", "md", "lg", "40%"]}>
                <Flex w="100%" justifyContent="center">
                <Image rounded="lg" marginTop="10px" src={e.photoURL} alt="imagen"></Image>
                </Flex>
                <Box textAlign="left">
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
               <Button leftIcon={FaHeart} marginBottom="10px" bg={customTheme.themeColors[400]}>Adóptame</Button>
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

export default CatCard