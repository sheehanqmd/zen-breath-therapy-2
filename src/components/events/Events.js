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

     changeDate = (str) => {
        let newStr = str.split('')
        newStr.splice(10, 12)
        let mins = newStr.join('')

        return mins
    }
    changeTime = (time) => {
        let hours = parseInt(time.substring(11, 13))
        let mins = time.substring(14, 16)

        if (hours == '00') hours = 12;
        if (hours > '12') hours = hours - 12;

        return hours + ':' + mins
    }

    getAM = (time) => {
        let firstTime = time.split('')
        let middleTime = firstTime.splice(11, 5)
        let finalTime = middleTime.join('')
        let militaryTime = finalTime.split(':')
        let endTime = (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) ? (+militaryTime[0] - 12) + ':' + militaryTime[1] + ' PM' : militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) == 2 ? militaryTime[0] + ':' + militaryTime[1] + ' PM' : militaryTime[0].charAt(0) == 0 && militaryTime[0].charAt(1) == 0 ? 12 + ':' + militaryTime[1] + ' AM' : militaryTime.join(':') + ' AM'
      
        let splitFinal = endTime.split('')
      
        let splitMiddle = splitFinal.slice(1).slice(-2)
      
        let finalFinal = splitMiddle.join('')
      
        return finalFinal
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
                        <p className="start">Event Start Date: {this.changeDate (event.start.local)}</p>
                       <p className="time">Event Start Time: {this.changeTime (event.start.local)}
                        {this.getAM (event.start.local)}
                        </p>
                        <p className="end">Event End Date: {this.changeDate (event.end.local)}</p>
                        <p className="time">Event End Time: {this.changeTime (event.start.local)}
                        {this.getAM (event.start.local)}
                        </p>
                        <p className="location">Location: {event.venue.address.localized_address_display}</p>
                        <p className="cost">Cost to Attend: ${event.cost} </p>
                        {/* <a href="{url}">{event.url}</a> */}
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