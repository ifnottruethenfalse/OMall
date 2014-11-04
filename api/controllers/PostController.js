/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `PostController.get()`
   */
  get: function (req, res) {
    Post.find()
      .sort('createdAt desc')
      .exec(function(err, posts) {
        // Do stuff here
        var sycFor = function (i) {
          // body...
          User.findOne({ id: posts[i].userId }, function(err, user) {
            // Do stuff here
            posts[i].fullname = user.fullname;
            if (i < posts.length - 1) {
              sycFor(i+1);
            } else {
              res.send(posts);
            }
          });
        }
        if (posts.length != 0) {
          sycFor(0);
        } else {
          res.send(posts);
        }
      });

    //Devolver arreglo de posts 
    //Ejemplo: [{user:"juanito",postDate:"fdsfsd",postTime:"fdsfs",postContent:"fdsfdsfdsf"}, ... ]
  },


  /**
   * `PostController.add()`
   */
  add: function (req, res) {
    Post.create({
      userId : req.user.id
    , content : req.body.content
    , image : "/global/img/default11.gif"
    }, function (err, post) {
      if (err) {
        console.log(err);
      }
      res.send(200);
      
    });
  },

  /**
   * `PostController.default()`
   */
  default: function (req, res) {
    Post.create({
      userId : 4
    , content : "Ya casi terminal la U!!"
    , image : "/admin/layout/img/avatar3.jpg"
    }, function (err, post) {
      if (err) {
        console.log(err);
      }
      Post.create({
        userId : 5
      , content : "Alguien sabe de alguien que venda un Play Station 3?"
      , image : "/admin/layout/img/avatar1.jpg"
      }, function (err, post) {
        if (err) {
          console.log(err);
        }
        Post.create({
          userId : 6
        , content : "Una curiosa ranit Iba por las vías del tren Patinaba con sus patita Con glamoroso vaivén. Patinaba sin mayor trabajo Sin importarle otras cosasCuando de un solo tajo El tren le cortó las nalgas. Le lanzó cerca de un camino A una considerable distancia Mas sin medir el peligro Fue por sus nalgas con ansia. Cuando casi llegaba a la meta Ocurrió lo que mas temía Pasó el tren cual cometa Y la degolló a la pobrecita. Analizando lo que esto reza, Te pediré que esto no hagas: “nunca pierdas la cabeza, tan solo por unas..."
        , image : "/admin/layout/img/avatar2.jpg"
        }, function (err, post) {
          if (err) {
            console.log(err);
          }
              Post.create({
                userId : 4
              , content : "Los peces son amigos!"
              , image : "/admin/layout/img/avatar3.jpg"
              }, function (err, post) {
                if (err) {
                  console.log(err);
                }
                res.send(200);
                
              });
          
        });
        
      });
      
    });
  },
};

