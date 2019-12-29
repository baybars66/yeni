
const expr = require ("express"); // projeye expres ekleniyorum.
const path = require('path');
const runxpres = expr(); // express nesnesi olutrudum.

const rutter = require("./Ruters/Ruter"); 

runxpres.use('/public', expr.static(path.join(__dirname, 'public')));

runxpres.use ( (req, res, next)=>{
      // console.log("url....:" + req.originalUrl);
       req.deneme= "baybars";

      next(); //response verdirmek için 
});


runxpres.use ("/", rutter); // tek satıra indi get yerine use geldi



runxpres.listen (66);
