
const path = require('path');

module.exports.indexCon = (req, res) => 
{ 
     const isim = ["BAYBARS", "ali", "veli","SUELA", "mahmut"];
     
res.render("viv", { 
    mesaj: "Merhaba ben json",
    kisi : isim
});
}

module.exports.logCon = (req, res) => 
{ 
    res.render("index2");
}

