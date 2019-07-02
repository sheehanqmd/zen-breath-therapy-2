// module.exports



// createOrders: (req, res) => {
//     const dbInstance = req.app.get("db");
//     let clientId = req.session.user.clientId;
//     console.log(clientId)
//     const {event_name, client_id, event_cost} = req.body;
//     console.log(req.body);
//     dbInstance.addOrder([
//         event_name,
//         client_id,
//         order_date
        
//     ])
//     .then(response => res.status(200));
// },

module.exports = {
    orderHistory: (req,res) => {
        const db = req.app.get('db');
        const client_id = req.session.user.id;
        db.orderHistory(client_id)
        .then(response => {
            console.log(response)
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        })
    },
    
    
    createCharge: (req, res, app) => {
        Stripe.charges.create(req.body, postStripeCharges(res));
    
    stripe.charges.create({
    
            amount: total,
            source: req.body.stripeTokenId,
            currency: 'usd'
          }).then(function() {
            console.log('Charge Successful')
            res.json({ message: 'Successfully purchased items' })
          }).catch(function() {
            console.log('Charge Fail')
            res.status(500).end()
          })
        
        }}
    