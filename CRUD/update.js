
const fs = require("fs");
const writeJSON = require("./writeJSON");

const update = function(new_title, new_desc) {

    let data_json = fs.readFileSync("G:/Escritorio-W10/Proyecto_JavaScript/Proyecto_taskApp/taskData.json", "utf-8"); 
    
    data = JSON.parse(data_json);

    for (let i = 0; i < data.length; i++) {
        if (new_title == data[i].title) {
            data[i].desc = new_desc;
        }
    }

    writeJSON(data);
    
}

module.exports = update; 
