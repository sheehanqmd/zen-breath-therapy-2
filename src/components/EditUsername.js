import React, { Component } from 'react'
import axios from "axios";
import {Redirect, Link} from "react-router-dom";

class EditUsername extends Component {
    constructor(){
        super()
        this.state ={
            username: "",
            editUsername: "",
            password: "",
            redirect: false
        };
        this.handleUsername = this.handleUsername.bind(this)
        this.handleEditUsername = this.handleEditUsername.bind(this)
        this.editUsername = this.editUsername.bind(this) 
        }
        handleUsername(e){
            this.setState({username: e.target.value})
        }
        handleEditUsername(e){
            this.setState({editUsername: e.target.value})
        }
        editUsername(){
            console.log(this.state)
            axios.put(`/auth/user/${this.state.username}`, {editUsername: this.state.editUsername})
       
            .then((response) => console.log (response),
            this.setState({redirect: true}))
            console.log(this.state.editUsername);
        }

    render() {
        console.log(this.state.editUsername)
      

        if(this.state.redirect){
            return <Redirect to="/" />
        }
        return (
            <div>
                <div className="container">
               <h3>Update User Name</h3>
                   <div>
                   </div><input onChange={this.handleUsername}placeholder= "username"/>      
                   <input  onChange={this.handleEditUsername}placeholder ="newUsername "/>
                  
                   <button className="btn-editUsername" onClick={this.editUsername}>Update User Name</button>
                   </div> 
                   
              
            </div>
        )
        }
    
};

export default EditUsername
