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
        loggedUser: null,
        isLogged: false,
        redirect: false
    }

    handleLogout = async () => {
        await MY_SERVICE.LOGOUT()
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

    handleSignupSubmit = async e => {
/*         e.preventDefault()
        const user = this.state.formSignup
        this.setState({ formSignup: { name: '', email: '', state: '', age: '', password: '' } })
        return await MY_SERVICE.signup(user) */
        e.preventDefault()
        const { name, email, password, age, state } = this.state.formSignup
        MY_SERVICE.signup({ name, email, password, age, state })
          .then(() => {
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
          .then(({ user }) => {
            this.setState({
              loggedUser: user,
              isLogged: true
            })
            alert('Sesión Iniciada')
            this.props.history.push('/login')
            
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
    
    render() {

        const {
            state,
            handleLoginSubmit,
            handleSignupSubmit,
            handleLoginInput,
            handleSignupInput,
            handleLogout
         } = this

         return (
             <MyContext.Provider
                value= {{
                    state,
                    handleLoginSubmit,
                    handleSignupSubmit,
                    handleLoginInput,
                    handleSignupInput,
                    handleLogout
                }}
                >
            {this.props.children}
            </MyContext.Provider>
            
         )
    }
}

export default withRouter(MyProvider)