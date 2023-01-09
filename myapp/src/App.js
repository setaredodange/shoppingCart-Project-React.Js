import React, { Component } from 'react'
import Header from "./components/Header/Header"
import Footer  from './components/Footer/Footer'
import Shop from './components/Shop/Shop'

export default class App extends Component {
  render() {
    return (
      <div>

        <Header/>

        <Shop/>


       <Footer/>
        
      </div>
    )
  }
}
