
const expr = require ("express"); // projeye expres ekleniyorum.
const ruter = expr.Router();


const yoncon = require ("../Controllers/yonmod"); 

ruter.get("/", yoncon.indexCon);
ruter.get("/log", yoncon.logCon);
//ruter.get("/log", module.exports.logCon); // böylede çalışır



module.exports = ruter;
