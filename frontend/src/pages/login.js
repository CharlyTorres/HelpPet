import React from 'react';
import { MyContext } from '../context'
import { FaKey, FaRegEnvelope } from "react-icons/fa";
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Box
} from '@chakra-ui/core'
import Form from '../components/Form'

function Login() {
  return (
    <MyContext.Consumer>
    {context =>
    <Flex w="100%" alignContent="center" justifyContent="center">
    <Form submit={context.handleLoginSubmit} title="Iniciar Sesión">
      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Box as={FaRegEnvelope} />} />
          <Input
            onChange={context.handleLoginInput}
            placeholder="Correo electronico"
            name="email"
            type="email"
          />
        </InputGroup>
      </FormControl>Home
      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Box as={FaKey} />} />
          <Input
            onChange={context.handleLoginInput}
            placeholder="Contraseña"
            name="password"
            type="password"
          />
        </InputGroup>
      </FormControl>
    </Form>
  </Flex>
    }
  </MyContext.Consumer>
  );
}

export default Login;
