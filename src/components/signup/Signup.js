import React, { Component } from 'react';
import axios from "axios";
import {Redirect, Link } from  "react-router-dom";
import Facebook from "../Facebook";



export class Signup extends Component {
    constructor(){
        super()
        this.state ={
            username: "",
            password: "",
            // firstName: "",
            // lastName: "",
            redirect: false
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        // this.handleFirstName = this.handleFirstName.bind(this)
        // this.handleLastName = this.handleLastName.bind(this)
        this.signupUser = this.signupUser.bind(this)
    }

    handleUsername(e){
        this.setState({username: e.target.value})
    }

    handlePassword(e){
        this.setState({password: e.target.value})
    }

    // handleFirstName(e){
    //     this.setState({firstName: e.target.value})
    // }

    signupUser(){
        axios.post("/auth/signup", {username: this.state.username, password: this.state.password})
        .then(() => this.setState({redirect: true}))
    }


    render() {
        if(this.state.redirect){
            alert("login")
            return<Redirect to="/login" />
        }
        return (
            <div>
                <div className="container">
               <h3>Create a New Account</h3>
            
            <div><input onChange={this.handleUsername} placeholder="username"/>
                <input onChange={this.handlePassword}placeholder="password" type="password"/>
            </div>
            <button className="btn-signup" onClick={this.signupUser}>Add New Account</button>
            <h1 className="facebook-Login"></h1>
                 {/* <Facebook /> */}
            </div>
            

            </div>
        )
    }
}

export default Signup

