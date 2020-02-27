import React from 'react';
import { MyContext } from '../context'
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon
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
          <InputLeftAddon children={<Icon name="email" />} />
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
          <InputLeftAddon children={<Icon name="lock" />} />
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
