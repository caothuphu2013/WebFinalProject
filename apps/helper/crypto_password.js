const cryptoJS = require('crypto-js');
const key = "my password";

module.exports = {
    decryptedPassword: function(password) {
        var encrypted = cryptoJS.AES.encrypt(password, key);
        var decrypted = cryptoJS.AES.decrypt(encrypted, key);
        return decrypted;
    },

    validPassword: function(passwordSQL , password){
        return passwordSQL.toString(cryptoJS.enc.Utf8) === password;
    }
}
