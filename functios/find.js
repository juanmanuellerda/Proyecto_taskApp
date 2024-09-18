
const list = require("./list.js");

a = list();

const findF = function(x) {
    for (let i = 0; i < a.length; i++) {
            return ((a[i].title.includes(x)));
    }
}

module.exports = findF;

