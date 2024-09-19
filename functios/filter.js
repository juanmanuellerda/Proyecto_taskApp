const tasks = require('../Data.js');

const filter = function(x) {
    
    let list = [];
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title.match(x)) {

            list.push(tasks[i].title);
        }          
    }
    return list;
}

module.exports = filter;


