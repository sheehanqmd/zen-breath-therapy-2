

module.export = 
addEmail: (req, res => {
    const dbInstance = req.app.get("db");
    let clientid = req.session.user.clientid;
    console.log(clientid);
    const {
        
    }

    
})

// app.post("/charge", async (req, res) => {
//     try {
//       let {status} = await stripe.charges.create({
//         amount: 2000,
//         currency: "usd",
//         description: "An example charge",
//         source: req.body
//       });
  
//       res.json({status});
//     } catch (err) {
//       res.status(500).end();
//     }
//   });


