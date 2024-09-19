/** Toma el objeto JS y lo convierte en un archivo de datos tipo JSON */

const fs = require("fs");
const tasks = require("../Data.js");
const writeJSON = require("./writeJSON");

const crear_JSON = () => writeJSON(tasks);   

module.exports = crear_JSON; 