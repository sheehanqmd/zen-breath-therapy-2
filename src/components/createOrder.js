// import React, { Component } from 'react'
// import Axios from 'axios';

// class createOrder extends Component {
//     constructor(){
//         super()
//         this.state = {
//          eventName: "",
//          clientId: "",
//          eventCost: null
//         }
//         handleChange = (e) => {
//             this.setState({[e.target.cart]: e.target.value})
//         }
//         handleClick = (e) => {
//             this.props.createOrder(this.state.eventName, this.state.clientId, this.state.eventCost.id)
//         }
// }


// createOrder (){
//     Axios.post('/api/createOrder', {eventName: this.state.eventName, clientId: this.state.clientId, eventCost: this.state.eventCost})
//     .then(() => this.setState({redirect: true}))
// }


//     render() {
//         if(this.state.redirect)
//         alert("Checkout")
//         return<Redirect to="/CheckoutForm" />
//     }
// }


//         return (
//             <div className={styles.form}>
//                 <select onChange={this.handleChange} cart="cart">
//                 </select>
//                 <input onChange=
                
//             </div>
//         )
//     }


// export default createOrder
