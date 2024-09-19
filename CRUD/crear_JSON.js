const fs = require("fs");
const tasks = require("../Data.js");
const writeJSON = require("./writeJSON");

const crear_JSON = function() {

    writeJSON(tasks);    
    return tasks;
}

module.exports = crear_JSON; 