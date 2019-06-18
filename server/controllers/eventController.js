let event = [];


module.exports = { 
    getEvent: function(req, res) {
        res.status(200).json(event);
    },    
}
const {event} = req.body;
const db = req.app.get('db')

db.findEvent(eventName).then( eventList => {

})