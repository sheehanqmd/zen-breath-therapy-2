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
    
// ORDERS
//Each order should contain order_id (which automatically increments), client_id (passed in), total (sum of event costs), events (array of event names)

//when inserting a new order, we pull the client id off of the session user, we pull the total off of the session user, and we pass in the events from the session user's cart as the events array


    checkout: (req, res) => {
        const { id, cart, total } = req.session.user;
        console.log(cart.event)
        // user.cart = [];
        // user.total = 0;
        // res.status(200).send(user);
        // console.log(user)

        const dbInstance = req.app.get("db");
       
        // console.log(clientId)
        // const {event_name, client_id, purchase_total} = req.body;
        console.log(req.body);
        dbInstance.createOrder([
            id,
            cart,
            total
        ])
        .then(response => {
            console.log(response)
            res.status(200).json(response)
        });
    },
   
   

}