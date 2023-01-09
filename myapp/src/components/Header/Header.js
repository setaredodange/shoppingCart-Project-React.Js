import React, { Component } from 'react'
import "./Header.css"

export default class header extends Component {
  render() {
    return (
      <div class="main-header">

      <nav class="main-nav nav">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">STORE</a></li>
          <li><a href="#">ABOUT</a></li>
        </ul>
      </nav>
      <h1 class="band-name band-name-large">StarMoon Travel Shop</h1>
  
        
      </div>
    )
  }
}
