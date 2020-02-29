import React, { Component } from 'react'
import { MyContext } from '../context'
import PetCard from '../components/Pet/Pet'

class Cats extends Component {
    

  render() {
    return <PetCard />
  }
}

export default Cats

Cats.contextType = MyContext