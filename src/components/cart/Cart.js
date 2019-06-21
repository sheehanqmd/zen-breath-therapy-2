import React, { Component } from 'react'
import axios from "axios";
import {getUser} from "../../redux/userReducer";
import {connect} from "react-redux";


class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            getCart: []
        };
    }

    componentDidMount(){
        this.getCart()
     }


     getCart(cart){
         axios .get("/api/cart")
         .then(response => {
            this.setState({
                getCart: response.data 
            })
         })
        }
        
         deleteFromCart(index){
            axios .delete(`/api/cart/${index}`)
            .then(response => {
                console.log(response.data)
                this.setState ({
                    getCart: response.data
                })
            })
        
        }


    render() {
        console.log(this.props)
        let cart = this.state.getCart.map((event, index) =>{
           

        return (
            <div className="cart-container"> key={index}>
                
                <div className="cart-info">
                    <h2>{event.name.text}</h2>
                    <h2>{event.cost}</h2>
                     <button className="cart-button" onClick={() => 
                        this.deleteFromCart(index)} >Remove From Cart</button>
                </div>
            </div>
        );
    });
    return(
        <div className="cart-container">
         
            {cart[0] ? (
                cart
            ) : (
                <div className="empty-cart">
                    <h1>Cart is Empty</h1>
              </div>
            )}
        </div>
    )
    }
}
const mapStateToProps = reduxState => {
    const {user} = reduxState ;
    return {
        user
    }
}


export default connect ( mapStateToProps, {getUser}) (Cart)
