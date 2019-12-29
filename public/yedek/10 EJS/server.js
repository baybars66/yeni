
// MVC Model View Controller yapısı Parçala yönet
// EJS (Embeded Java Script)
//view Engine Controller ile View arasındaki 
//bağlantıyı sağlar. Html için java gömebiliyorsun.
//

const expr = require ("express"); // projeye expres ekleniyorum.
const path = require('path');
const runxpres = expr(); // express nesnesi olutrudum.
 runxpres.set("view engine", "ejs")
 runxpres.set("views", path.join(__dirname, '/goruntu')); //tanıtmazsan defult view
 

const rutter = require("./Ruters/Ruter"); 

runxpres.use('/public', expr.static(path.join(__dirname, 'public')));

runxpres.use ( (req, res, next)=>{
      // console.log("url....:" + req.originalUrl);
       req.deneme= "baybars";

      next(); //response verdirmek için 
});


runxpres.use ("/", rutter); // tek satıra indi get yerine use geldi



runxpres.listen (66);
