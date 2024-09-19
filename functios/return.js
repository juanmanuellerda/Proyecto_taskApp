const tasks = require('../Data.js');

const return_js = function(x) {
    
    let list = [];

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title.match(x)) {
            
            list.push(tasks[i].desc);  
        }         
    }

return list;  
}

module.exports = return_js;