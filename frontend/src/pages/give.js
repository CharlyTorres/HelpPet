import React, {useContext,useEffect} from 'react';
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

function Give({history}) {

  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })

  return (
    <MyContext.Consumer>
    {context =>
    <Flex w="100%" alignContent="center" justifyContent="center">
    <Form submit={context.handlePetSubmit} title="Formulario para dar en adopción">

        <InputGroup>
          <InputLeftAddon children={<Box as={FaDog} />} />
          <Input
            fontSize={["8px", "md", "lg", "xl"]}
            onChange={context.handleCreatePetInput}
            placeholder="Nombre de la mascota (no es necesario)"
            name="name"
            type="text"
            value={context.state.formCreatePet.name}
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
            value= {context.state.formCreatePet.age}
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
            value= {context.state.formCreatePet.typeOfPet}
          >
            <option value="Dog">Perro</option>
            <option value="Cat">Gato</option>
            <option value="other">Otro tipo de mascota</option>
          </Select>
        </InputGroup>
      </FormControl>

      <FormControl>
        <InputGroup>
        <InputLeftAddon children={<Box as={FaImage} />} />
          <Input
            onChange={context.handleCreatePetInput}
            value= {context.state.formCreatePet.photoURL}
            fontSize={["8px", "md", "lg", "xl"]}
            placeholder="Foto de la mascota (URL)"
            name="photoURL"
            type="text"
         />
        </InputGroup>
      </FormControl>

      <FormControl>
        <InputGroup>
        <InputLeftAddon children={<Box as={FaImage} />} />
          <Select
            onChange={context.handleCreatePetInput}
            value= {context.state.formCreatePet.vaccine}
            fontSize={["8px", "md", "lg", "xl"]}
            placeholder="Está vacunado?"
            name="vaccine"
            type="text"
         >
           <option value="Si">Si</option>
           <option value="No">No</option>
         </Select>
        </InputGroup>
      </FormControl>

      <FormControl>
        <InputGroup>
        <InputLeftAddon children={<Box as={FaImage} />} />
          <Select
            onChange={context.handleCreatePetInput}
            value= {context.state.formCreatePet.sterilized}
            fontSize={["8px", "md", "lg", "xl"]}
            placeholder="Está esterilizado?"
            name="sterilized"
            type="text"
         >
           <option value="Si">Si</option>
           <option value="No">No</option>
         </Select>
        </InputGroup>
      </FormControl>

      <FormControl>
        <InputGroup>
        <InputLeftAddon children={<Box as={FaImage} />} />
          <Select
            onChange={context.handleCreatePetInput}
            value= {context.state.formCreatePet.dewormed}
            fontSize={["8px", "md", "lg", "xl"]}
            placeholder="Está desparacitado?"
            name="dewormed"
            type="text"
         >
           <option value="Si">Si</option>
           <option value="No">No</option>
         </Select>
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
            value={context.state.formCreatePet.description}
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
