var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'string'},
    passports : { collection: 'Passport', via: 'user' },
    fullname: {type: 'string'},
    address: {type: 'string'},
    city: {type: 'string'},
    country: {type: 'string'}
  },
  connection: "somePostgresqlServer"
};

module.exports = User;
