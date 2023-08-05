const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
const autenticar = require("./loginAuth")
let resLogin = "nLog";

app.use(router);
app.use(express.static(path.join((__dirname,'src'))));
app.use(express.json());

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname+"/src/index.html"));
})
router.post('/', express.urlencoded(),(req, res)=>{
    autenticar(req.body.email, req.body.password, (autenticado) => {
        if(autenticado){
            resLogin = "logado";
        }else{
            resLogin = "nLog";
        }
        res.redirect("/menu");
    })
})

app.get("/menu", (req, res)=>{
    if(resLogin == "logado"){
        res.sendFile(path.join(__dirname+"/src/menu.html"));
    }else{
        res.redirect("/");
    }
})

app.listen(3005, ()=>{
    console.log("show");
})