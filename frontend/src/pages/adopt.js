import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Flex, Stack, Box , Image} from '@chakra-ui/core'
import customTheme from '../theme';

function Adopt() {
  return (
    <Flex w="100%" flexDirection="row" justifyContent="center" alignContent="center">
  <Box w='95%' h='auto' marginTop="50px" marginBottom="50px" rounded="md" bg={customTheme.themeColors[200]} boxShadow="xl" justifyContent="center">
    <Flex w="100%" padding="10" flexDirection="column" justifyContent="center" alignContent="center">
    <Stack spacing={8} p={8}>
    <Flex width="100%" justifyContent="center">
    <Image textAlign="center" width="200px" src="/images/houseAdopt.svg" />
    </Flex>
   <Link to="/dogs">
      <Button marginTop="10px" w="100%" size="lg" bg={customTheme.themeColors[400]} fontSize={["12px", "md", "lg", "xl"]}>Perros</Button>
   </Link>
   <Link to="/cats">
      <Button marginTop="10px" w="100%" size="lg" bg={customTheme.themeColors[400]} fontSize={["12px", "md", "lg", "xl"]}>Gatos</Button>
   </Link>
    <Link to="/others">
      <Button marginTop="10px" w="100%" size="lg" bg={customTheme.themeColors[400]} fontSize={["12px", "md", "lg", "xl"]}>Otro tipo de mascotas</Button>
   </Link>
   </Stack>
   </Flex>
  </Box>
  </Flex>
  );
}

export default Adopt;