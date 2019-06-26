module.exports = {
    addToCart: (req, res) => {
        console.log(req.body.event)
        req.session.user.cart.push(req.body.event)
        req.session.user.total += req.body.event.cost
        res.status(200).json(req.session.user.cart)
    },

     getCart: (req, res) => {
         if(req.session.user){
            res.status(200).json(req.session.user.cart); 
         }
     
    },



    deleteFromCart: (req, res) => {
      console.log(req.params)
        req.session.user.cart.splice(+req.params.index, 1)
        // req.session.user.total -= req.params.event.cost
        console.log(req.session.user.cart)
        res.status(200).json(req.session.user.cart)
    },
    

    checkout: (req, res) => {
        const { user } = req.session;
        user.cart = [];
        user.total = 0;
        res.status(200).send(user);

        const dbInstance = req.app.get("db");
       
        console.log(clientId)
        const {event_name, client_id, event_id} = req.body;
        console.log(req.body);
        dbInstance.addOrder([
            event_name,
            client_id,
            event_id
            
        ])
        .then(response => res.status(200));
    },
   
   

}