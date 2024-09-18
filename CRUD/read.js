
const fs = require("fs");

const read = function() {
    data = JSON.parse(fs.readFileSync("G:/Escritorio-W10/Proyecto_JavaScript/Proyecto_taskApp/taskData.json", "utf-8")); 
    
    return data; 
}

module.exports = read;
