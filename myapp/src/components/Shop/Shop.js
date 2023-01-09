import React, { Component } from 'react'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import "./Shop.css"

export default class Shop extends Component {

constructor(props){
    super(props)


    this.state ={

        products : [
            {id:1, title:'product1', price:1000, img:'images/product1.jpg'},
            {id:2, title:'product2', price:2000, img:'images/product2.jpg'},
            {id:3, title:'product3', price:3000, img:'images/product3.jpg'},
            {id:4, title:'product4', price:41000, img:'images/product4.jpg'},
            {id:5, title:'product5', price:5000, img:'images/product5.jpg'},
            {id:6, title:'product6', price:6000, img:'images/product6.jpg'}

        ],

        shoppingCart:[]

    }
this.addProductToCart=this.addProductToCart.bind(this)
    
}
addProductToCart(productId){
    console.log(productId);
    let mainProduct = this.state.products.find(product => {
        return product.id === productId
    })

    console.log(mainProduct);
    this.setState(prevState => {
        return{
            shoppingCart : [ ...prevState.shoppingCart, mainProduct]
        }
    })
}
   


  render() {
    return (
      <>

          
    <div class="container content-section">
      <div class="shop-items">
        {this.state.products.map(product => (
            <Product {...product} onAddProduct={this.addProductToCart}/>
        ))}

      </div>

      
 
      </div>


      <div class="container content-section">
       
       <h2 class="section-header">CART</h2>
       <div class="cart-row">
         <span class="cart-item cart-header cart-column">ITEM</span>
         <span class="cart-price cart-header cart-column">PRICE</span>
         <span class="cart-quantity cart-header cart-column">QUANTITY</span>
       </div>
       <div class="cart-items">
        {this.state.shoppingCart.map(product => (
           <Cart {...product}/>
        ))}
       
 
       </div>
 
       <div class="cart-total">
         <strong class="cart-total-title">Total</strong>
         <span class="cart-total-price"> $0</span> 
       </div>
       <button class="btn btn-primary btn-purchase" id="remove-all-products" type="button">
         Empty Cart
       </button>
     
 
         
       </div>
     
        
      </>
    )
  }
}
