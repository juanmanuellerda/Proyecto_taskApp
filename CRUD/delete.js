const fs = require("fs");
const writeJSON = require("./writeJSON");

const deleteF = function(delete_title) {

    let data_json = fs.readFileSync("G:/Escritorio-W10/Proyecto_JavaScript/Proyecto_taskApp/taskData.json", "utf-8"); 
    
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

