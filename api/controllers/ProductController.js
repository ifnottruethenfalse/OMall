/**
 * ProductController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/product/add`
   */
   add: function (req, res) {
    var product = req.body;
    console.log(req);
    Product.create(product, function (err, product) {
      if (err) {
        console.log(err);
      }
      res.redirect("/myProducts");
      
    });
    
    // Send a JSON response
    
  },


  /**
   * Action blueprints:
   *    `/product/edit`
   */
   get: function (req, res) {
    
    // Send a JSON response
    Product.find()
      .exec(function(err, products) {
        // Do stuff here
        res.send(products);
      });
  },


  /**
   * Action blueprints:
   *    `/product/remove`
   */
   remove: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ProductController)
   */
  _config: {}

  
};
