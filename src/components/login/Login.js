import React, { Component } from 'react'
import axios from "axios";
import {Redirect} from "react-router-dom";

export class Login extends Component {
    constructor(){
        super()
        this.state ={
            username: "",
            password: "",
            redirect: false
        };
    

    this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.loginUser = this.loginUser.bind(this)
    }

    handleUsername(e){
        this.setState({username: e.target.value})
    }

    handlePassword(e){
        this.setState({password: e.target.value})
    }
    loginUser(){
    axios.post("/auth/login", {username: this.state.username, password: this.state.password})
    .then(() => this.setState({redirect:true})).catch(()=>
    {alert("login unsuccessful. try again")})
    }

    render() {
if(this.state.redirect){
    alert("login successful. Welcome.")
    return <Redirect to="/home"/>
    
}

        return (
            <div>
               <h3> Login</h3>
               <div> Username
                   <input placeholder = "username" onChange={this.handleUsername}/>
                   Password
                   <input placeholder ="password " type = "password" onChange={this.handlePassword}/>
                   <button onClick={this.loginUser}>Log in</button>

               </div>
            </div>
        )
    }
}

export default Login

