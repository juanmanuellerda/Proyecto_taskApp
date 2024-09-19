/** Busca una elemento con su key "title" y lo elimina junto con su respectivo elemento "desc" */

const fs = require("fs");
const writeJSON = require("./writeJSON");

const deleteF = (delete_title) => {
    let data_json = fs.readFileSync("G:/Escritorio-W10/Proyecto_JavaScript/Proyecto_taskApp/Data.json", "utf-8"); 
    data = JSON.parse(data_json);
   
    for (let i = 0; i < data.length; i++) {
        if (data[i].title === delete_title) {
            data.splice(i,1);
            writeJSON(data);
            return;
        }
    }
    console.log("no se encuentra la tarea");
}

module.exports = deleteF; 

