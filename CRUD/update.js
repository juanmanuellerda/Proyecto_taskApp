
/* Esta función edita un elemento de datos JSON */

const fs = require("fs");
const writeJSON = require("./writeJSON");

const update = (old_title, new_title, new_desc) => {
    let data_json = fs.readFileSync("G:/Escritorio-W10/Proyecto_JavaScript/Proyecto_taskApp/Data.json", "utf-8"); 
    data = JSON.parse(data_json);

    for (let i = 0; i < data.length; i++) {
        if (old_title == data[i].title) {
            data[i].title = new_title;
            data[i].desc = new_desc;
        }
    }
    writeJSON(data);   
}
module.exports = update; 
