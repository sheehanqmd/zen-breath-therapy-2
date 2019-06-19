require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const {signupUser, loginUser, getUser, logout } = require('./controllers/authController')
const app = express();
const { getEvents} = require('./controllers/eventsController');
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
app.post("/auth/logout", logout)
app.get("/api/events", getEvents)

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log("Database connected")
});

// {'Authorization': `Bearer ${token}`}

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});