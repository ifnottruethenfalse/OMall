/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport = require("passport");
module.exports = {
  login: function(req,res){
    return res.view('login/login');
  },

  process: function(req,res){
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        var msg = {"message": "Email or Password are incorrect"};
        return res.send(msg);
      }
      req.logIn(user, function(err) {
        if (err) res.send(err);
        //res.redirect("/tilidom");
        return res.json(200); 

      });
    })(req, res);
  },

  logout: function (req,res){
    req.logout();
    res.redirect('login/login');

  },
  _config: {}
};