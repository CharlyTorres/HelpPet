import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
import { Box, Image, Flex, Input, Button } from '@chakra-ui/core'
import { FaCloudUploadAlt } from "react-icons/fa";
import customTheme from '../../theme'


function PetCard() {
    

  return(

    <MyContext.Consumer>

    {context => {
      return(
    <Box>
      {context.state.cats.map(e => {
              return(
                <Box>
                <Image src={e.photoURL} alt="imagen"></Image>
      <h1>Estado: {e.age}</h1>
      <h1>Edad: {e.age} años</h1>
  </Box>
              )
            })}
    </Box>
    )}
    }
    </MyContext.Consumer>
  )
}

export default PetCard