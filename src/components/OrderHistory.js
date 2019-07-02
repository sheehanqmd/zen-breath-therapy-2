import React, { Component } from 'react'
import axios from 'axios';

export class OrderHistory extends Component {
    constructor(props){
        super(props)
        this.state = {
            orderHistory: [],
            loggedIn: true,
            user: []

        }
        
    }
    componentDidMount(){
        this.orderHistory()
        // this.ChangeOrderHistory(this.state.orderHistory)


        
    }
    orderHistory = () => {
        axios
        .get('/api/orderHistory')
        .then(response => {
            console.log(response.data)
            this.setState({ orderHistory: response.data });
        }).catch(error => {
            console.log(error)
        })
    }
 
    ChangeOrderHistory(str){
        console.log(str);
        if (str === null) {
            return null;
        }
        let arr = str[0].split('"');
        let index = arr.indexOf("text");
        return arr[index + 2]
    }
    render() {
        const { orderHistory } = this.state;
        console.log(orderHistory)

        return (

            <div>
                
                <h1 className="order-history">Order History</h1>

              <div className="orderHistory">
              <div className="cart-info">

<div className="container section about-info">

                  {orderHistory.map((order, index) =>
                    <div className="order">
                        {console.log(order)}
                        <h2>{this.ChangeOrderHistory(order.event_name)}</h2>
                        <h2>${order.purchase_total}</h2>
                    </div> )}
                    </div>
                    </div>
              </div>

            </div>
        )
    }
}

export default OrderHistory
