const express =  require('express');
const path = require('path')

const PORT = 3050;
const app = express();

app.listen(PORT, ()=>{
    console.log('Servidor funcionando');
    });

const indexRouter= require("./routes/indexRouter.js");

app.use("/",indexRouter);

app.use(express.static("public"));

