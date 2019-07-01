import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {getUser} from "../../redux/userReducer";
import {connect} from "react-redux";
// import "./Events.css";



class Events extends Component {
     constructor() {
         super();
         this.state = {
             eventsInfo: []
         };

        
     }


     componentDidMount(){
        this.props.getUser()
         axios
         .get("/api/events")
         .then(response => {
             this.setState({
                 eventsInfo: response.data.events 
             })
         })
     }
//set bearer token in .env file{'Authorization': `Bearer ${token}`}

 addEvent(event){
     axios .post("/api/cart", {event})
     .then(response => {
         console.log(response.data)
     })
     
 }

    render() {
        const {eventsInfo} = this.state

console.log(this.state.eventsInfo)


    
        return (
            <div>

            <div className="events-container">
                {eventsInfo.map((event, index) =>
                    (
                        <div class="container">
                          <div class="row">
                              <div class="row s12 l3 ">
                                  <div class="card">
                            <div class="card-content">
                        <div key={event.id}>
                        <h5 className="name">{event.name.text}</h5>
                        <p>{event.description.text}</p>
                        <p className="start">Event Start Date and Time: {event.start.local}</p>
                        <p className="end">Event End Date and Time: {event.end.local}</p>
                        <p className="location">Location: {event.venue.address.localized_address_display}</p>
                        <p className="cost">Cost to Attend: ${event.cost} </p>
                        <a href="{url}">{event.url}</a>
                        <br />
                        
                        <p><button className="waves-effect waves black btn -LARGE" onClick={() => this.addEvent(event)}>ADD TO CART</button></p>
  
                        <br>
                        </br>
                       
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        

                     </div>
                    ))}
               
             </div> 
             </div>
        )
        
    }
}
const mapStateToProps = reduxState => {
    const {user} = reduxState ;
    return {
        user
    }
}

export default connect ( mapStateToProps, {getUser})(Events)