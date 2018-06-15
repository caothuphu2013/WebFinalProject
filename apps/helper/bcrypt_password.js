const bcrypt = require('bcrypt-nodejs');

module.exports = {
  encryptPassword: function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
  }
  ,
  validPassword: function (password, passwordSQL) {
    return bcrypt.compareSync(password, passwordSQL);
  }
}