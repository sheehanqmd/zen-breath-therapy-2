import React, { Component } from 'react'
// import axios from "axios";
// import {getUser} from "../../redux/userReducer";
// import {connect} from "react-redux";


class Checkout extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        }
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
    }
    
  componentDidMount(){
    this.props.getUser();
    this.props.getCart();
  }

  handleFirstName(e){
    this.setState({firstName: e.target.value})
  }
    handleLastName(e){
        this.setState({LastName: e.target.value})
    }
        handleEmail(e){
            this.setState({email: e.target.value})
        }

axios

}