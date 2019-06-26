

const bcrypt = require("bcryptjs");


module.exports = {
    signupUser: (req, res) => {
      console.log(req.body)
      const { first_name, last_name, email, username, password } = req.body;
      const db = req.app.get('db')

      db.find_user(username).then( usersList => {
          if(usersList.length !== 0){
              res.status(403).json({error: "USERNAME_TAKEN"})
          } else {
              console.log("else")
              bcrypt.hash(password, 10).then( hash => {
                  db.add_user(first_name, last_name, email, username, hash).then(()=>{
                     
                      res.status(200).json(req.session.user)
                  })
              })
          }
      } ) },

      loginUser: (req, res) => {
        console.log(req.body)
        const {username, password} = req.body
        const db = req.app.get('db');
        db.find_user(username).then(user =>{
            if(!user.length){
                
                res.status(404).json({
                   
                    error: "USER_DOES_NOT_EXIST"
                })
            } else {
                
                bcrypt.compare(password, user[0].password).then(doesMatch => {
                    if(!doesMatch){
                        
                        res.status(403).json({error: "USERNAME_OR_PASSWORD_INCORRECT"});
                    } else{
                       
                        req.session.user = {
                            username: user[0].username,
                            cart: [],
                            total: 0
                        };
                        res.status(200).json(req.session.user)
                    }
                })
            }
        })

        
    
        
    },
      getUser: (req, res) => {
          if(req.session.user){
              res.json(req.session.user)
          }else{
              res.status(401).json({error: "PLEASE_LOG_IN"})
          }
      },

      logoutUser:(req, res) => {
        req.session.destroy();
            res.status(200).send(req.session);
            
      },
      editUsername: (req, res) => {
        const db = req.app.get('db');
        const {editUsername} = req.body
        const username = req.params.username
        console.log(req.session.user)
        // db.find_user(username)
        db.editUsername([username, editUsername])
        .then(response => res.status(200).json(response))
        .catch(err => {
            res.status(500).send({errorMessage: "Error"});
        });
    }
  
      };
