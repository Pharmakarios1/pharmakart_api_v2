import express from "express";
import dotenv from "dotenv"
dotenv.config()

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res)=>{
 res.send("<h1>Hello from Node</h1>")
})

app.listen(PORT, ()=>{
    console.log(`server listening at ${PORT}`)
})

