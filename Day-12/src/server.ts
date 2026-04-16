import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response)=>{
    res.send("hello world");
})
app.post("/", (req, res)=>{})

app.listen(3000, ()=>{
    console.log("Server started");
})