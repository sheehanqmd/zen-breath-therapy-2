module.exports = {
    addToCart: (req, res) => {
        console.log(req.body.event)
        req.session.user.cart.push(req.body.event)
        res.status(200).json(req.session.user.cart)
    },

     getCart: (req, res) => {
         if(req.session.user){
            res.status(200).json(req.session.user.cart); 
         }
     
}
}