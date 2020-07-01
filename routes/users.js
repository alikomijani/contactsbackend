var express = require('express');
var router = express.Router();
let users = [
  {username:'ali' , password:'komij'},
  {username:'ali2' , password:'komij2'},
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  const result = JSON.stringify(users);
  res.send(result);
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  const {username , password} = req.body;
  if (!username){
   const error =  {username:'your must enter a username!'};
   const result = JSON.stringify(error);
   res.status(400);
   res.send(result);
   return;
  }
  if (!password){
    const error =  {password:'your must enter a password!'};
    res.status(400);
    const result = JSON.stringify(error);
    res.send(result);
    return;
   }
   const find = users.find(item=>item.username ==username);
   if (find){
    const error =  {user:'this username already taken!'};
    const result = JSON.stringify(error);
    res.status(400);
    res.send(result);
    return;
   }
   const user = {username , password};
  users.push({username , password});
  
  const result = JSON.stringify(user);
  res.status(201);
  res.send(result );
});

module.exports = router;
