const list = require("./functios/list.js");
const find = require("./functios/find.js");
const filter = require("./functios/filter.js");
const listar = require("./functios/list_functios.js");
const return_js = require("./functios/return.js");
const read = require("./CRUD/read.js");
const update = require("./CRUD/update.js");
const create = require("./CRUD/create.js");
const deleteF = require("./CRUD/delete.js");
const writeJSON = require("./CRUD/writeJSON.js");
const crear_JSON = require("./CRUD/crear_JSON.js");


switch (process.argv[2]) {
    case "list":
        console.log(list());
        break;

    case "find":
        console.log(find(process.argv[3]));
        break;

    case "filter":
        console.log(filter(process.argv[3]));
        break;

    case "return":
        console.log(return_js(process.argv[3]));
        break;

    case "read":
        console.log(read());
        break;

    case "edit":   
        console.log(update(process.argv[3], process.argv[4], process.argv[5]));
        
        break;
        
    case "add":
        console.log(create(process.argv[3], process.argv[4]));
        break;

    case "delete":
        deleteF(process.argv[3]);
        break;

    case "writeJSON":
        console.log(writeJSON(process.argv[3])); 
        break;

    case "crear_JSON":
        console.log(crear_JSON()); 
        break;
    
    case "list_functions":
        listar(); 
        break;

    default:
        console.log("comando no aceptado")
        break;
  }