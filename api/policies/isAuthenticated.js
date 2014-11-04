module.exports = function(req, res, next){
  var is_auth = req.user;
  console.log(req.user)
  if (is_auth) next();
  // User is not allowed
  else return res.redirect("/login");
}
