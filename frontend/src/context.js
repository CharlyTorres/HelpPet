import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router-dom'
import MY_SERVICE from './services/index'


export const MyContext = createContext()

class MyProvider extends Component {
    state = {
        formSignup: {
            name: '',
            email: '',
            state: '',
            age: '',
            password: ''
        },

        formLogin: {
            email: '',
            password: '',
        },

        formCreatePet: {
          name: '',
          size: '',
          age: '',
          typeOfPet: '',
          description: '',
        },

        loggedUser: null,
        isLogged: false,
    }

    handleLogout = async () => {
        await MY_SERVICE.logOut()
        this.props.history.push('/')
        this.setState({ loggedUser: null, isLogged: false })
      }

    handleSignupInput = e => {
        const { formSignup } = this.state
        const { name, value } = e.target
        formSignup[name] = value
        this.setState({ formSignup })
      }

    handleLoginInput = e => {
        const { formLogin } = this.state
        const { name, value } = e.target
        formLogin[name] = value
        this.setState({ formLogin })
      }

    handleCreatePetInput = e => {
        const { formCreatePet } = this.state
        const { name, value } = e.target
        formCreatePet[name] = value
        this.setState({ formCreatePet })
      }

    handleSignupSubmit = async e => {
        e.preventDefault()
        const { name, email, password, age, state } = this.state.formSignup
        MY_SERVICE.signup({ name, email, password, age, state })
          .then((res) => {
            this.setState(prevState => ({
              ...prevState,
              formSignup: {
                name: '',
                email: '',
                state: '',
                age: '',
                password: ''
              }
            }))
            alert('Cuenta creada, porfavor Inicia Sesión')
            this.props.history.push('/login')
          })
          .catch(() => {
            alert('Hubo un error, porfavor revisa los campos e intenta de nuevo.')
          })
      } 
      
    
    handleLoginSubmit = e => {
        e.preventDefault()
        const form = this.state.formLogin
        return MY_SERVICE.login(form)
          .then(({ data }) => {
            this.setState({
              loggedUser: data.user,
              isLogged: true
            })
            alert('Sesión Iniciada')
            this.props.history.push('/profile')
          })
          .catch(err => {
            this.setState({
              loggedUser: null,
              isLogged: false,
              formLogin: { email: '', password: '' }
            })
            alert('Usuario o contraseña invalida')
          })
          .finally(() => this.setState({ formLogin: { email: '', password: '' } }))
      }


      handlePetSubmit = e => {
        const { name, size, age, typeOfPet, description } = this.state.formCreatePet
        e.preventDefault()
        return MY_SERVICE.createAdoption({name, size, age, typeOfPet, description})
        .then((res) => {
          this.setState(prevState => ({
            ...prevState,
            formCreatePet: {
              name: '',
              size: '',
              age: '',
              typeOfPet: '',
              description: ''
            }
          }))
          alert('Mascota para adopción creada!')
          this.props.history.push('/adopt')
        })
        .catch(() => {
          alert('Hubo un error, porfavor revisa los campos e intenta de nuevo.')
        })


      }


      handleFile = e => {
        const formData = new FormData()
        formData.append('photoURL', e.target.files[0])
        MY_SERVICE.uploadPhoto(formData)
          .then(({ data }) => {
            this.setState({ loggedUser: data.user })
          })
          .catch(err => {
            console.log(err)
          })
      }

    
    render() {

        const {
            state,
            handleLoginSubmit,
            handleSignupSubmit,
            handleLoginInput,
            handleSignupInput,
            handleLogout,
            handleFile,
            handlePetSubmit,
            handleCreatePetInput
         } = this

         return (
             <MyContext.Provider
                value= {{
                    state,
                    handleLoginSubmit,
                    handleSignupSubmit,
                    handleLoginInput,
                    handleSignupInput,
                    handleLogout,
                    handleFile,
                    handlePetSubmit,
                    handleCreatePetInput
                }}
                >
            {this.props.children}
            </MyContext.Provider>
            
         )
    }
}

export default withRouter(MyProvider)