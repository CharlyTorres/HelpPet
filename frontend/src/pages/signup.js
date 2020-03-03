import React from 'react'
import { MyContext } from '../context'
import { FaUserCircle, FaCity, FaUserCheck, FaKey, FaRegEnvelope, FaPhone } from "react-icons/fa";
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
          <Select
            onChange={context.handleSignupInput}
            placeholder="Edad"
            name="age"
            type="number"
            value= {context.state.formSignup.age}
          >
            <option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
<option value="32">32</option>
<option value="33">33</option>
<option value="34">34</option>
<option value="35">35</option>
<option value="36">36</option>
<option value="37">37</option>
<option value="38">38</option>
<option value="39">39</option>
<option value="40">40</option>
<option value="41">41</option>
<option value="42">42</option>
<option value="43">43</option>
<option value="44">44</option>
<option value="45">45</option>
<option value="46">46</option>
<option value="47">47</option>
<option value="48">48</option>
<option value="49">49</option>
<option value="50">50</option>
<option value="51">51</option>
<option value="52">52</option>
<option value="53">53</option>
<option value="54">54</option>
<option value="55">55</option>
<option value="56">56</option>
<option value="57">57</option>
<option value="58">58</option>
<option value="59">59</option>
<option value="60">60</option>
<option value="61">61</option>
<option value="62">62</option>
<option value="63">63</option>
<option value="64">64</option>
<option value="65">65</option>
<option value="66">66</option>
<option value="67">67</option>
<option value="68">68</option>
<option value="69">69</option>
<option value="70">70</option>
<option value="71">71</option>
<option value="72">72</option>
<option value="73">73</option>
<option value="74">74</option>
<option value="75">75</option>
<option value="76">76</option>
<option value="77">77</option>
<option value="78">78</option>
<option value="79">79</option>
<option value="80">80</option>
          </Select>
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
          <InputLeftAddon children={<Box as={FaPhone} />} />
          <Input
            onChange={context.handleSignupInput}
            placeholder="Teléfono (10 dígitos)"
            name="tel"
            type="number"
            value= {context.state.formSignup.tel}
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
