

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
        const {username, password} = req.body
        db.find_user(username)
        .edit_name([req.params.id, name])
        .then(response => res.status(200).json(response))
        .catch(err => {
            res.status(500).send({errorMessage: "Error"});
        });
    }
    // editNote: (req, res) => {
    //     const { id } = req.params;
    //     const { note_title, note_content } = req.body;
    //     console.log(id, note_title, note_content);
    //     const dbInstance = req.app.get("db");
    //     dbInstance
    //       .edit_note([id, note_title, note_content])
    //       .then(response => {
    //         console.log(`"newArr:" ${response}`);
    //         res.status(200).send(response);
    //       })
    //       .catch(e => res.status(500).send(e));
      };
