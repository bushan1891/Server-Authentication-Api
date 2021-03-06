const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
// session false means not using cookie based authentication
const requireAuth = passport.authenticate('jwt',{session:false});
const requireSignin =passport.authenticate('local',{session:false});
module.exports = function(app){

app.get('/',requireAuth,function(req,res){
  res.send({'message':'code 123'})
});
app.post('/signin',requireSignin,Authentication.signin)
app.post('/signup',Authentication.signup);
}
