import React, { Component } from 'react'
import "./Home.css"

export class Home extends Component {
    render() {
        return (
            <div className="title">
               <h1>Breath Therapy</h1>
               <img src="https://images.pexels.com/photos/7640/pexels-photo.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="responsive-img" ></img>
            </div>
        )
    }
}

export default Home
