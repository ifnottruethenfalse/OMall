/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	userId: { model: 'User', required: true },
  	content: { type: 'string', required: true},
  	image: {type:'string'}
  },
  connection: "somePostgresqlServer"
};

