import React from 'react';
import { MyContext } from '../context'
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
    <MyContext.Consumer>
    {context =>
    <Flex w="100%" alignContent="center" justifyContent="center">
    <Form onSubmit={context.handleCreatePetSubmit} title="Formulario para dar en adopción">

        <InputGroup>
          <InputLeftAddon children={<Box as={FaDog} />} />
          <Input
            fontSize={["8px", "md", "lg", "xl"]}
            onChange={context.handleCreatePetInput}
            placeholder="Nombre de la mascota (no es necesario)"
            name="name"
            type="text"
          />
        </InputGroup>

      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Box as={FaCat} />} />
          <Input
            onChange={context.handleCreatePetInput}
            fontSize={["8px", "md", "lg", "xl"]}
            placeholder="Edad de la mascota (aproximada)"
            name="age"
            type="text"
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Box as={FaDragon} />} />
          <Select
            onChange={context.handleCreatePetInput}
            placeholder="Tipo de Mascota"
            name="typeOfPet"
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
            fontSize={["8px", "md", "lg", "xl"]}
            placeholder="Foto de la mascota (URL)"
            name="petPhoto"
            type="file"
         />
        </InputGroup>
      </FormControl>


      <FormControl isRequired>
        <InputGroup>
          <Input
            onChange={context.handleCreatePetInput}
            fontSize={["8px", "md", "lg", "xl"]}
            height="10vh"
            placeholder="Descripción de la mascota"
            name="description"
            type="text"
         />
        </InputGroup>
      </FormControl>
    </Form>
  </Flex>
    }
  </MyContext.Consumer>
  );
}

export default Give;
