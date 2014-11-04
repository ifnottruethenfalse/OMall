/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `UserController.index()`
   */
  index: function (req, res) {
    return res.view('homepage');
  },


  /**
   * `UserController.profile()`
   */
  profile: function (req, res) {
    return res.view('profile');
  },

  /**
   * `UserController.profile()`
   */
  set: function (req, res) {
    console.log(req.body);
    var user = {};
    if (req.body.fullname) user.fullname = req.body.fullname;
    if (req.body.telefono) user.telefono = req.body.telefono; 
    if (req.body.interes) user.interes = req.body.interes;
    if (req.body.ocupacion) user.ocupacion = req.body.ocupacion;
    if (req.body.descripcion) user.descripcion = req.body.descripcion;
    if (req.body.web) user.web = req.body.web;

    User.update({id:req.user.id},user).exec(function (err, user) {
      req.user = user;
    });

    return res.redirect('/profile');
  },

  /**
   * `UserController.products()`
   */
  products: function (req, res) {
    return res.view('products');
  },


  /**
   * `UserController.dashboard()`
   */
  dashboard: function (req, res) {
    return res.view('dashboard');
  },


  /**
   * `UserController.orders()`
   */
  orders: function (req, res) {
    return res.view('orders');
  },


  /**
   * `UserController.myproducts()`
   */
  myproducts: function (req, res) {
    return res.view('myproducts');
  },


  /**
   * `UserController.wishlist()`
   */
  wishlist: function (req, res) {
    return res.view('wishlist');
  },


  /**
   * `UserController.inbox()`
   */
  inbox: function (req, res) {
    return res.view('inbox');
  },


  /**
   * `UserController.friends()`
   */
  friends: function (req, res) {
    return res.view('friends');
  },


  /**
   * `UserController.calendar()`
   */
  calendar: function (req, res) {
    return res.view('calendar');
  },


  /**
   * `UserController.portfolio()`
   */
  portfolio: function (req, res) {
    return res.view('portfolio');
  },


  /**
   * `UserController.upgrade()`
   */
  upgrade: function (req, res) {
    return res.view('upgrade');
  },


  /**
   * `UserController.aboutus()`
   */
  aboutus: function (req, res) {
    return res.view('aboutus');
  },


  /**
   * `UserController.contact()`
   */
  contact: function (req, res) {
   return res.view('contact');
  },


  /**
   * `UserController.product()`
   */
  product: function (req, res) {
   return res.view('product');
  },


  /**
   * `UserController.order()`
   */
  order: function (req, res) {
    return res.view('order');
  },


  /**
   * `UserController.productEdit()`
   */
  productEdit: function (req, res) {
    return res.view('productEdit');
  },

  /**
   * `UserController.lock()`
   */
  lock: function (req, res) {
    return res.view('lock');
  },

  /**
   * `UserController.getUser()`
   */
  getUser: function (req, res) {
    return res.send(req.user);
  }
};

