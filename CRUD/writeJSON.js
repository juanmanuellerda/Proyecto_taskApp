/* esta función escribe el archivos de datos JSON */

const fs = require("fs")

const writeJSON = function(new_obj) {
    data_json = JSON.stringify(new_obj, null, 2);   
    return fs.writeFileSync("G:/Escritorio-W10/Proyecto_JavaScript/Proyecto_taskApp/Data.json", data_json); 
}

module.exports = writeJSON; 
