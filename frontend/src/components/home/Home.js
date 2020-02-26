import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Flex, Stack, Box , Image} from '@chakra-ui/core'
import customTheme from '../../theme';

function Home() {
  return (
    <Flex w="100%" flexDirection="row" justifyContent="center" alignContent="center">
  <Box w='80vw' h='auto' marginTop="50px" rounded="md" bg={customTheme.themeColors[200]} boxShadow="xl" justifyContent="center">
    <Flex w="100%" padding="10" flexDirection="column" justifyContent="center" alignContent="center">
    <Stack spacing={8} p={8}>
    <Flex width="100%" justifyContent="center">
    <Image textAlign="center" width="200px" src="/images/logoImg.svg" />
    </Flex>
    <Link to="/emergency">
    <Button  w="100%" size="lg" bg={customTheme.themeColors[500]} fontSize={["12px", "md", "lg", "xl"]}>Emergencia Patitas</Button>
   </Link>
   <Link to="/adopt">
      <Button marginTop="10px" w="100%" size="lg" bg={customTheme.themeColors[400]} fontSize={["12px", "md", "lg", "xl"]}>Adopta</Button>
   </Link>
   <Link to="/give">
      <Button marginTop="10px" w="100%" size="lg" bg={customTheme.themeColors[400]} fontSize={["12px", "md", "lg", "xl"]}>Da en adopción</Button>
   </Link>
    <Link to="/donate">
      <Button marginTop="10px" w="100%" size="lg" bg={customTheme.themeColors[400]} fontSize={["12px", "md", "lg", "xl"]}>Dona</Button>
   </Link>
   </Stack>
   </Flex>
  </Box>
  </Flex>
  );
}

export default Home;