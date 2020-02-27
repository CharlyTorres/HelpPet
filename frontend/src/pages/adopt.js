import React from 'react';
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon
} from '@chakra-ui/core'
import Form from '../components/Form'

function Adopt() {
  return (
    <Flex w="100%" alignContent="center" justifyContent="center">
    <Form onSubmit="submit" title="Iniciar Sesión">
      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Icon name="email" />} />
          <Input
     //       onChange={context.handleLoginInput}
            placeholder="Correo electronico"
            name="email"
            type="email"
          />
        </InputGroup>
      </FormControl>Home
      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Icon name="lock" />} />
          <Input
            placeholder="Contraseña"
            name="password"
            type="password"
          />
        </InputGroup>
      </FormControl>
    </Form>
  </Flex>
  );
}

export default Adopt;
