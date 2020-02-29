import React, { Component } from 'react'
import { MyContext } from '../context'
import CatCard from '../components/Pet/Cat'

class Cats extends Component {
    

  render() {
    return <CatCard />
  }
}

export default Cats

Cats.contextType = MyContext