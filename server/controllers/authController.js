module.exports

const bcrypt = require("bcryptjs");


module.exports = {
    signupUser: (req, res) => {
      console.log(req.body)
      const { username, password } = req.body;
      const db = req.app.get('db')

      db.find_user(username).then( usersList => {
          if(usersList.length > 0){
              res.status(403).json({error: "USERNAME_TAKEN"})
          } else {
              bcrypt.hash(password, 10).then(newPassword => {
                  db.add_user(username, newPassword).then(()=>{
                      res.status(200).json(username)
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
                        console.log("no user")
                        res.status(403).json({error: "USERNAME_OR_PASSWORD_INCORRECT"});
                    } else{
                        console.log('session')
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


      logout:(req, res) => {
        req.session.destroy();
            res.status(200).send(req.session);
            
      },
      };
