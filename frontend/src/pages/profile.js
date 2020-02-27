import React, { Component } from 'react'
import { MyContext } from '../context'
import ProfileView from '../components/profile/ProfileView'

class Profile extends Component {
    
  componentDidMount() {
    const { loggedUser, isLogged } = this.context.state
    if (!loggedUser && !isLogged) {
      this.props.history.push('/login')
    }
  }

  render() {
    return <ProfileView />
  }
}

export default Profile

Profile.contextType = MyContext