/* Esta función busca un elemento del objeto lo retorna como objeto */

const tasks = require('../Data.js');

const filter = (x) => {
    let list = [];
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title.match(x)) {
            list.push(tasks[i].title);
            list.push(tasks[i].desc);
        }          
    }
    return list;
}

module.exports = filter;


