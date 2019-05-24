const express=require("express");
const db=require("./data/db.js");
const port = 4000;
const server=express(); // IMPORTANT TO USE EXPRESS
server.use(express.json());

server.listen(4000, ()=> {
    console.log(`\n***Server Running on http://localhost:4000***\n`)
})