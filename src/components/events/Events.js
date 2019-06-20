import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


class Events extends Component {
     constructor() {
         super();
         this.state = {
             eventsInfo: []
         };
     }

handleChange(input){
    this.setState({name: input});
}

     componentDidMount(){
         axios
         .get("/api/events")
         .then(response => {
             this.setState({
                 eventsInfo: response.data.events 
             })
         })
     }

//set bearer token in .env file{'Authorization': `Bearer ${token}`}


    render() {
        const {eventsInfo} = this.state

console.log(eventsInfo)


    
        return (
            <div>
            <div className="events container">
                {eventsInfo.map((event, index) =>
                    (
                        <div>
                        <h5>{event.name.text}</h5>
                        <p>{event.description.text}</p>
                        <p className="start">Event Start Date and Time: {event.start.local}</p>
                        <p className="end">Event End Date and Time: {event.end.local}</p>
                        <p className="location">Location: {event.venue.address.localized_address_display}</p>
                        <p><Link>{event.url}</Link></p>
                        <p><Link to= "nav-link"className="btn btn- black darken-3-LARGE">ADD TO CART</Link></p>

                     </div>
                    ))}
               
             </div> 
             </div>
        )
    }
}

export default Events