/*El método JSON.parse() analiza una cadena de texto como JSON 
El método fs.readFileSync() lee un archivo de texto de forma sincronica */

//La función read devuelve los datos json como un objeto

const fs = require("fs");

const read = function() {
    data = JSON.parse(fs.readFileSync("G:/Escritorio-W10/Proyecto_JavaScript/Proyecto_taskApp/Data.json", "utf-8"));    
    return data; 
}

module.exports = read;
