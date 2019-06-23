import React, { Component } from 'react'
import axios from "axios";
import {Redirect, Link} from "react-router-dom";

class EditUsername extends Component {
    constructor(){
        super()
        this.state ={
            username: "",
            password: "",
            redirect: false
        };
        this.handleUsername = this.handleUsername.bind(this)
        this.editUsername = this.editUsername.bind(this)
    }
        handleUsername(e){
            this.setState({username: e.target.value})
        }

        // editUsername(e){
        //     axios.patch("/auth/user/:id", {username: e.target.value})
        // }                                    
        //  (`/api/cart/${index}`)

        // titleChange = input => {
        //     this.setState({ note_title: input });
        //     console.log(this.state.note_title);

        editUsername(){
            axios.patch("/auth/user/:id", {username: this.state.username})
            .then(() => this.setState({redirect: true}))
            console.log(this.state.editUsername);
        }

    render() {
      

        if(this.state.redirect){
            return <Redirect to="/" />

        return (
            <div>
                <div className="container">
               <h3>Update User Name</h3>
                   <div>
                   </div><input onChange={this.handleUsername}placeholder= "username"/>      
                   <input  onChange={this.handleEditUsername}placeholder ="newUsername "/>
                  
                   </div>
                  <div>
                   <button className="btn-editUsername" onChange={this.editUsername}>Update User Name</button>
                   </div> 
                   
              
            </div>
        )
        }
    }
};

export default EditUsername
