const http = require ('http');
const expr = require ("express"); // projeye expres ekleniyorum.
const path = require('path');
const yonveren = expr(); // express nesnesi olutrudum.

const yoncon = require ("./yonmod"); // ruter içinde var

yonveren.use('/public', expr.static(path.join(__dirname, 'public')));

yonveren.use ("/", yoncon); // tek satıra indi get yerine use geldi



yonveren.listen (66);
