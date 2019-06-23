import React, { Component } from 'react'
import axios from "axios";
import {Redirect, Link } from  "react-router-dom";

class Logout extends Component {
    constructor(){
        super()
        this.state={

        }
        this.logoutUser = this.logoutUser.bind(this)

    }
     handleLogoutUser(e){
         this.setState()
     }

    logoutUser(){
        axios.post("/auth/logout").then(response => console.log(response.data))
        .then(() => this.setState({redirect:true}))
    }
    render() {
        if(this.state.redirect){
        
            return<Redirect to="/" />
        }
        return (
            <div>
             
                <li onClick={this.LogoutUser}>LOG OUT</li>
               
            </div>
        )
    }
}

export default Logout
