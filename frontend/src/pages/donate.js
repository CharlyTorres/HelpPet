import React from 'react';
import Map from '../components/mapbox/map'
import { Flex, Box, Link } from '@chakra-ui/core'
import customTheme from '../theme'



function Donate() {
  return (
   <Flex w="100%" justifyContent="center">
   <Box w='95%' h='auto' marginTop="50px" marginBottom="50px" rounded="md" bg={customTheme.themeColors[200]} boxShadow="xl" justifyContent="center">
    <Flex w="100%" justifyContent="center" flexWrap="wrap" direction="row">
   <Map />
   </Flex>
   <h1>Puedes donar alimento para mascotas en la siguiente dirección: Tonalá 10 colonia Roma Norte C.P 06700.</h1><br></br>
   <h2>O puedes donar via PayPal</h2>
   <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="VLCEDTF9L84YL" />
<input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donar con el botón PayPal" />
<img alt="" border="0" src="https://www.paypal.com/es_MX/i/scr/pixel.gif" width="1" height="1" />
</form>

   </Box>
   </Flex>

  );
}

export default Donate;
