/*esta función encuentra los distintos elementos de la colección de
datos */ 


const list = require("./list.js");

a = list();

const findF = (x) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i].title.includes(x)){
            mess= "true";
            break;
        }        
        else{
            mess = "false";
        }
    }
    return mess; 
}

module.exports = findF;


