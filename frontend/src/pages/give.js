import React from 'react';
import { FaDog, FaCat, FaDragon, FaImage } from "react-icons/fa";
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
  Box
} from '@chakra-ui/core'
import Form from '../components/Form'

function Give() {
  return (
    <Flex w="100%" alignContent="center" justifyContent="center">
    <Form onSubmit="submit" title="Formulario para dar en adopción">

        <InputGroup>
          <InputLeftAddon children={<Box as={FaDog} />} />
          <Input
     //       onChange={context.handleLoginInput}
            placeholder="Nombre de la mascota (no es necesario)"
            name="petName"
            type="text"
          />
        </InputGroup>

      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Box as={FaCat} />} />
          <Input
            placeholder="Edad de la mascota (aproximada)"
            name="petAge"
            type="text"
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Box as={FaDragon} />} />
          <Select
            placeholder="Tipo de Mascota"
            name="petType"
            type="text"
          >
            <option value="Dog">Perro</option>
            <option value="Cat">Gato</option>
            <option value="other">Otro tipo de mascota</option>
          </Select>
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <InputGroup>
        <InputLeftAddon children={<Box as={FaImage} />} />
          <Input
            placeholder="Foto de la mascota (URL)"
            name="petPhoto"
            type="text"
         />
        </InputGroup>
      </FormControl>


      <FormControl isRequired>
        <InputGroup>
          <Input
            height="10vh"
            placeholder="Descripción de la mascota"
            name="petDescription"
            type="text"
         />
        </InputGroup>
      </FormControl>
    </Form>
  </Flex>
  );
}

export default Give;
