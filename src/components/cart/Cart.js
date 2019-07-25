import React, { Component } from 'react'
import axios from "axios";
import {getUser} from "../../redux/userReducer";
import {connect} from "react-redux";
import { Link, Redirect } from "react-router-dom";





class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            getCart: []
        };



    }

    componentDidMount(){
        this.props.getUser().then(() => {
            this.getCart()
        })
     }


     getCart(){
         axios .get("/api/cart")
         .then(response => {
            this.setState({ 
                getCart: response.data 
            })
         })
        }

       
        
         deleteFromCart(index){
            axios 
            .delete(`/api/cart/${index}`)
            .then(response => {
                console.log(response.data)
                this.setState ({
                    getCart: response.data
                })
                this.props.getUser()
            })
        }     
       checkout(){
           axios
           .post('/api/cart/checkout', {event_name: this.state.eventName, client_id: this.state.clientId,  purchase_total: this.state.purchase_total})
           .then(response => {
               console.log(response.data)
               this.setState({orderId: response.data[0].id, redirect: true})
        })
           
           .catch((err) => alert(err, 'Choose Payment Method'))
        }
        
    render() {
        console.log(this.state)
        if (this.state.redirect) {
           return <Redirect to={`/checkoutForm/${this.state.orderId}`} />
       }
        console.log(this.props.user)
        let cart = this.state.getCart.map((event, index) =>{

        return (

            <div>
                    <div className="container">  
            <div className="cart-container" key={index}>
             
                <div className="cart-info">

                <div className="container section about-info">
            <div className="card blue-grey darken-1">
                 <div className="card-content white-text ">
                    <h4>{event.name.text}</h4>
                    <h5>${event.cost}</h5>
                         </div>
                         <span className="checkoutTotal"> Total: ${this.props.user.user.total}</span>
                        
                         <div className="card-action grey lighten-4 grey-text" > 
                         <div> <button><Link to="/checkoutForm" className="checkoutForm" onClick={() => this.checkout()}>Checkout Now</Link></button></div>
                </div>
                <div className="card-action grey lighten-4 grey-text" > 
                <button className="cart-button" onClick={() => 
                        this.deleteFromCart(index)} >Remove From Cart</button>
                </div>
                         
                         </div>
                       </div> 
                </div>  
                     </div>
                     </div>
                     </div>

        );
    });
    return(
        <div className="cart-container">
            
         
            {cart[0] ? (
                cart
            ) : (
                <div>
                    <div className="container-empty-cart">              
                     <div className="empty-cart">
                    <h1>Cart is Empty</h1>
                    <br />
                    <br />
                    <br />
                    <div className="history-button">
                    <a className="waves-effect grey btn-large"><Link to="/orderHistory" className="button">View Order History</Link></a>
                    </div>
                    </div> 
                    </div>
                    
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


