const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.set('trust proxy', true);
app.get("/",async(req,res)=>{
    console.log("go")
    const ipAddress = req.socket.remoteAddress;
    res.send(ipAddress);
})

app.listen(port,"0.0.0.0",()=>{
    console.log("Your app is now listening very carefully!");
})
