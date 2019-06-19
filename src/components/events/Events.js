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
                        <p>{event.name.text}</p>
                        <p>{event.description.text}</p>
                        <p>{event.url}</p>
                     </div>
                    ))}
               
             </div> 
             </div>
        )
    }
}

export default Events