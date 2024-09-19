/* La función "list" devuelve el contenido de Data.json como un objeto */

const read = require('../CRUD/read');

const list = function() {

    return read();
  }

module.exports = list;



