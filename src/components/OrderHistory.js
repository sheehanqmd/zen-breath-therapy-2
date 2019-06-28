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
    }
    orderHistory = () => {
        axios
        .get('/api/orderHistory')
        .then(response => {
            console.log(response)
            this.setState({ orderHistory: response.data });
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const { orderHistory } = this.state;
        console.log(orderHistory)

        return (

            <div>
                <h1>Order History</h1>

              <div className="order-history">

                  {orderHistory.map((order, index) =>
                    <div className="order">
                        <h2>{orderHistory.event_name}</h2>
                        <h2>{orderHistory.purchase_total}</h2>
                    </div> )}
                  

              </div>

            </div>
        )
    }
}

export default OrderHistory
