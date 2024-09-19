/** Crea nuevo dato JSON */

const fs = require("fs");
const writeJSON = require("./writeJSON");

const create = (new_title, new_desc) => {
    data_temp = {
        title: new_title,
        desc: new_desc
    };
    let data_json = fs.readFileSync("G:/Escritorio-W10/Proyecto_JavaScript/Proyecto_taskApp/Data.json", "utf-8"); 
    data = JSON.parse(data_json);
    
    data.push(data_temp);
    writeJSON(data);
}

module.exports = create;
