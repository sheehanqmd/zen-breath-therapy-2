import React, { Component } from 'react'
import axios from "axios";
import {Redirect, Link } from  "react-router-dom";

class SignedOutLinks extends Component {
    constructor(){
        super()
        this.state={}

    }
    LogoutUser(){
        axios.post("/auth/logout").then(response => console.log(response.data))
        .then(() => this.setState({redirect:true}))
    }
    render() {
        if(this.state.redirect){
            alert(logout)
            return<Redirect to="/home" />
        }
        return (
            <div>
                {/* <Link to="/login"><button>Login</button></Link> 
                <Link to="/signup"><button>Create Login</button></Link>  */}
                <button onClick={this.logoutUser}>LOG OUT</button>
            </div>
        )
    }
}

export default SignedOutLinks
