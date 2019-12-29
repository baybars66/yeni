
const path = require('path');
const expr = require ("express"); // projeye expres ekleniyorum.
const ruter = expr.Router();



module.exports.indexCon = (req, res) => { res.sendFile(path.join(__dirname, "index.html"));}
module.exports.logCon = (req, res) => { res.sendFile(path.join(__dirname, "index2.html"));}


ruter.get("/", module.exports.indexCon);
ruter.get("/log", module.exports.logCon);


module.exports = ruter;
