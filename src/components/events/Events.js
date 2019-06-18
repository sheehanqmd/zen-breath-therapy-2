import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";


class Events extends Component {
    //  constructor() {
    //      super();
    //      this.state = {
    //          eventInfo: {}
    //      };
    //  }
    //  componentDidMount(){
    //      return axios
    //      .get(`http:    ${this.props.match.params.id}`)
    //      .then(results => {
    //          this.setState({
    //              eventInfo: results.data
    //          })
    //      })
    //  }

    render() {




    
        return (
            <div className="events container">
                <div className="card z-depth-0">
                    <div className="card-content">
                    <span className="card-title" >Events</span>
                    <p>the details of the event</p>
                    </div> 
                    <div className="card-action.grey-4grey-text">
                    <div>Posted by Zen Breath Therapy</div>
                    <div>August 11, 2019</div>
                </div> 
            </div>
             </div> 
        )
    }
}

export default Events