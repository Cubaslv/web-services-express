// invocando paquetes npm 
const colors = require("colors");
const path = require("path"); 
const express = require("express");


const app =express();
    
    app.get("/",function(req,res) {
        res.sendFile(path.join(__dirname+ "/index.html"))
    }  );

    app.listen(3000, function () { 
        console.log("server runing in porterrr ".red,3000 );
    });
