const http = require ('http');
const expr = require ("express"); // projeye expres ekleniyorum.
const path = require('path');
const yonveren = expr(); // express nesnesi olutrudum.

const rutter = require("./Ruters/Ruter"); 

yonveren.use('/public', expr.static(path.join(__dirname, 'public')));

yonveren.use ("/", rutter); // tek satıra indi get yerine use geldi



yonveren.listen (66);
