import React from 'react';
import MapEmergency from '../components/mapbox/map1'
import { Flex } from '@chakra-ui/core'

function Emergency() {
  return (
    <Flex w="100%" justifyContent="center">
    <MapEmergency></MapEmergency>
    </Flex>
   );
}

export default Emergency;
