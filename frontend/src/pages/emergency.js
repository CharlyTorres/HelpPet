import React from 'react';
import MapEmergency from '../components/mapbox/map1'
import { Flex, Box, Image } from '@chakra-ui/core'
import customTheme from '../theme'

function Emergency() {
  return (
<Flex w="100%" justifyContent="center">
   <Box w='95%' h='auto' marginTop="50px" marginBottom="50px" rounded="md" bg={customTheme.themeColors[200]} boxShadow="xl" justifyContent="center">
    <Flex w="100%" justifyContent="center" flexWrap="wrap" direction="row">
    <Image w="200px"src="/images/emergencyLogo.svg"></Image>
    <MapEmergency></MapEmergency>
    <h1>Da click en el Icono de Ubicación en el mapa, para mostrarte los hospitales veterinarios más cercanos a tu Ubicación!</h1>
    </Flex>
    </Box>
   </Flex>
   );
}

export default Emergency;
