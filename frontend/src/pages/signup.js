import React from 'react'
import { MyContext } from '../context'
import { FaUserCircle, FaCity, FaUserCheck, FaKey, FaRegEnvelope } from "react-icons/fa";
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


export default function Signup() {
  return ( 
  <MyContext.Consumer>
  {context => (
    <Flex w="100%" alignContent="center" justify="center" >
    <Form submit={context.handleSignupSubmit} title="Registrate">
    <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Box as={FaUserCircle} />} />
          <Input
            onChange={context.handleSignupInput}
            placeholder="Nombre"
            name="name"
            type="name"
            value= {context.state.formSignup.name}
          />
        </InputGroup>
        </FormControl>

        <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Box as={FaCity} />} />
          <Select onChange={context.handleSignupInput} name="state" type="state" placeholder="Estado de la republica" value= {context.state.formSignup.state}>

      <option value="Aguascalientes">Aguascalientes</option>
      <option value="Baja California">Baja California</option>
      <option value="Baja California Sur">Baja California Sur</option>
      <option value="Campeche">Campeche</option>
      <option value="Chiapas">Chiapas</option>
      <option value="Chihuahua">Chihuahua</option>
      <option value="Coahuila">Coahuila</option>
      <option value="Colima">Colima</option>
      <option value="CDMX">CDMX</option>
      <option value="Durango">Durango</option>
      <option value="Estado de México">Estado de México</option>
      <option value="Guanajuato">Guanajuato</option>
      <option value="Guerrero">Guerrero</option>
      <option value="Hidalgo">Hidalgo</option>
      <option value="Jalisco">Jalisco</option>
      <option value="Michoacán">Michoacán</option>
      <option value="Morelos">Morelos</option>
      <option value="Nayarit">Nayarit</option>
      <option value="Nuevo León">Nuevo León</option>
      <option value="Oaxaca">Oaxaca</option>
      <option value="Puebla">Puebla</option>
      <option value="Querétaro">Querétaro</option>
      <option value="Quintana Roo">Quintana Roo</option>
      <option value="San Luis Potosí">San Luis Potosí</option>
      <option value="Sinaloa">Sinaloa</option>
      <option value="Sonora">Sonora</option>
      <option value="Tabasco">Tabasco</option>
      <option value="Tamaulipas">Tamaulipas</option>
      <option value="Tlaxcala">Tlaxcala</option>
      <option value="Veracruz">Veracruz</option>
      <option value="Yucatán">Yucatán</option>
      <option value="Zacatecas">Zacatecas</option>

        </Select>
        </InputGroup>
        </FormControl>

        <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Box as={FaUserCheck} />} />
          <Input
            onChange={context.handleSignupInput}
            placeholder="Edad"
            name="age"
            type="number"
            value= {context.state.formSignup.age}
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Box as={FaRegEnvelope} />} />
          <Input
            onChange={context.handleSignupInput}
            placeholder="Correo electronico"
            name="email"
            type="email"
            value= {context.state.formSignup.email}
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children={<Box as={FaKey} />} />
          <Input
            onChange={context.handleSignupInput}
            placeholder="Contraseña"
            name="password"
            type="password"
            value= {context.state.formSignup.password}
          />
        </InputGroup>
      </FormControl>
    </Form>
  </Flex>
  )}
  </MyContext.Consumer>
  )
}
