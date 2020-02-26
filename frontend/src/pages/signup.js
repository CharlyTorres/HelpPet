import React from 'react';
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
  Icon
} from '@chakra-ui/core'
import Form from '../components/Form'

function Signup() {
  return (
    <Flex w="100%" alignContent="center" justify="center" >
    <Form onSubmit="submit" title="Registrate">
    <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Icon name="name" />} />
          <Input
     //       onChange={context.handleLoginInput}
            placeholder="Nombre"
            name="name"
            type="name"
          />
        </InputGroup>
        </FormControl>

        <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Icon name="estado" />} />
          <Select placeholder="Estado de la republica">

            <option value="0">Todo México</option>

            <option value="1">Aguascalientes</option>

            <option value="2">Baja California</option>

            <option value="3">Baja California Sur</option>

            <option value="4">Campeche</option>

            <option value="5">Coahuila de Zaragoza</option>

            <option value="6">Colima</option>

            <option value="7">Chiapas</option>

            <option value="8">Chihuahua</option>

            <option value="9">Distrito Federal</option>

            <option value="10">Durango</option>

            <option value="11">Guanajuato</option>

            <option value="12">Guerrero</option>

            <option value="13">Hidalgo</option>

            <option value="14">Jalisco</option>

            <option value="15">México</option>

            <option value="16">Michoacán de Ocampo</option>

            <option value="17">Morelos</option>

            <option value="18">Nayarit</option>

            <option value="19">Nuevo León</option>

            <option value="20">Oaxaca</option>

            <option value="21">Puebla</option>

            <option value="22">Querétaro</option>

            <option value="23">Quintana Roo</option>

            <option value="24">San Luis Potosí</option>

            <option value="25">Sinaloa</option>

            <option value="26">Sonora</option>

            <option value="27">Tabasco</option>

            <option value="28">Tamaulipas</option>

            <option value="29">Tlaxcala</option>

            <option value="30">Veracruz de Ignacio de la Llave</option>

            <option value="31">Yucatán</option>

            <option value="32">Zacatecas</option>

        </Select>
        </InputGroup>
        </FormControl>

        <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Icon name="other" />} />
          <Input
     //       onChange={context.handleLoginInput}
            placeholder="Edad"
            name="age"
            type="number"
          />
        </InputGroup>
      </FormControl>

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
      </FormControl>

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

export default Signup;
