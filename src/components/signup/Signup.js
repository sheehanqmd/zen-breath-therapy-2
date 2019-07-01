import React, { Component } from 'react';
import axios from "axios";
import {Redirect, Link } from  "react-router-dom";
import Facebook from "../Facebook";




export class Signup extends Component {
    constructor(){
        super()
        this.state ={
            first_name: "",
            last_name: "",
            email: "",
            username: "",
            password: "",
            redirect: false
        }
        this.handleFirst_name = this.handleFirst_name.bind(this)
        this.handleLast_name = this.handleLast_name.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        
        this.signupUser = this.signupUser.bind(this)
       
    }
    handleFirst_name(e){
        this.setState({first_name: e.target.value})
    }
    handleLast_name(e){
        this.setState({last_name: e.target.value})
    
    }
    handleEmail(e){
        this.setState({email: e.target.value})
    }

    handleUsername(e){
        this.setState({username: e.target.value})
    }

    handlePassword(e){
        this.setState({password: e.target.value})
    }

    

    signupUser(){
        console.log(this.state)
        axios.post("/auth/signup", { first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email, username: this.state.username, password: this.state.password})
        .then(() => this.setState({redirect: true})).catch((err) => alert(err, 'Username Taken'))
    }

    


    render() {
        if(this.state.redirect){
            alert("Please Log In")
            return<Redirect to="/login" />
        }
        return (
            <div>
                <div className="container">
               <h3>Create a New Account</h3>
            
            <div>
                <input onChange={this.handleFirst_name} placeholder="firstName" />
                <input onChange={this.handleLast_name} placeholder="lastName" />
                <input onChange={this.handleEmail} placeholder="email@email.com"/>
                <input onChange={this.handleUsername} placeholder="username"/>
                <input onChange={this.handlePassword}placeholder="password" type="password"/>
            </div>
            <a className="waves-effect waves-light btn-signup" onClick={this.signupUser}>Add New Account</a>
            <h1 className="facebook-Login"></h1>
                 <Facebook />
            </div>
            

            </div>
        )
    }
}

export default Signup

