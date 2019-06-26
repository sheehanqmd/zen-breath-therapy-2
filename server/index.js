require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const {signupUser, loginUser, getUser, logoutUser, editUsername } = require('./controllers/authController')
const app = express();
const { getEvents} = require('./controllers/eventsController');
const { addToCart, getCart, deleteFromCart, checkout } = require("./controllers/cartController")
// const { } = require ("./controllers/checkoutController")
let { SERVER_PORT, SESSION_SECRET } = process.env;
// let {'Authorization': `Bearer ${token}`} = process.env;


app.use(express.json());



app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);







app.post("/auth/signup", signupUser)
app.post("/auth/login", loginUser)
app.get("/auth/user", getUser)
app.post("/auth/logout", logoutUser)
app.get("/api/events", getEvents)
app.put("/auth/user/:username", editUsername);

app.post("/api/cart", addToCart)
app.get("/api/cart", getCart)
app.delete("/api/cart/:index", deleteFromCart);

app.post("/api/cart/checkout", checkout);

// app.get('/', (req, res) => {
//   res.render('index', {
//     stripePublishableKey: keys.stripePublishableKey
//   });
// });

// app.post("/api/cart/:id", cartController.add);


massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log("Database connected")
}).catch(err => console.log(err));

// {'Authorization': `Bearer ${token}`}



app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});