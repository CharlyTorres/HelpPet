import React, { Component } from 'react'
import { MyContext } from '../context'
import OtherCard from '../components/Pet/Others'

class Others extends Component {
    

  render() {
    return <OtherCard />
  }
}

export default Others

Others.contextType = MyContext