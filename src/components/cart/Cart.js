import React, { Component } from 'react'
import axios from "axios";
import {getUser} from "../../redux/userReducer";
import {connect} from "react-redux";
import CheckoutForm from "../CheckoutForm";
import { Link, Redirect } from "react-router-dom";




class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            getCart: []
        };



    }

    componentDidMount(){
        this.props.getUser()
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
       checkout(){
           axios
           .post('/api/cart/checkout', {event_name: this.state.eventName, client_id: this.state.clientId,  purchase_total: this.state. purchase_total})
           .then(response => {
               console.log(response.data)
               this.setState({orderId: response.data[0].id, redirect: true})
        })
           
           .catch((err) => alert(err, 'Choose Payment Method'))
        }
        
    render() {
        if (this.state.redirect) {
           return <Redirect to={`/checkoutForm/${this.state.orderId}`} />
       }
        console.log(this.props.user)
        let cart = this.state.getCart.map((event, index) =>{
           

        return (
            <div className="cart-container"> key={index}>
                
                <div className="cart-info">
                    <h2>{event.name.text}</h2>
                    <h2>${event.cost}</h2>
                     <button className="cart-button" onClick={() => 
                        this.deleteFromCart(index)} >Remove From Cart</button>
              
                         </div>
                         {/* <span className="checkoutTotal"> Total: ${total}</span> */}
                        
                         <div> <button><Link to="/checkoutForm" className="checkoutForm" onClick={() => this.checkout()}>Checkout Now</Link></button></div>
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

    // const mapStateToProps = reduxState => {
   
   
   
    //     return { event 
    // }
        
     
    
// }
const mapStateToProps = reduxState => {
    const {user} = reduxState ;
    return {
        user
    }
}


export default connect ( mapStateToProps, {getUser}) (Cart)

