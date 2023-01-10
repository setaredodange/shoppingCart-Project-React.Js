import React, { Component } from 'react'
import "./Cart.css"

export default class Cart extends Component {

  clickHandler(id){
    this.props.onRemove(id)

  }

  render() {
    let {id, title, img, price} = this.props
    return (
   <div class="cart-row">
    <div class="cart-item cart-column">
      <img class="cart-item-image" src={img} width="100" height="100"/>
      <span class= "cart-item-title"> {title}</span>
    </div>
    <span class= "cart-price cart-column"> $ {price}</span>
    <div class="cart-quantity cart-column">
      <button class="btn ntn-danger" type="button" onClick={this.clickHandler.bind(this, id)}>remove</button> 
      </div>

    
    </div>
    )
  }
}
