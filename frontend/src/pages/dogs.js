import React, { Component } from 'react'
import { MyContext } from '../context'
import DogCard from '../components/Pet/Dog'

class Dogs extends Component {
    

  render() {
    return <DogCard />
  }
}

export default Dogs

Dogs.contextType = MyContext