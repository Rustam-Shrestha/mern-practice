const express = require("express");
const app = express()

const { connectDatabase } = require("./database/database")
const Blog = require("./model/blogModel")

// is we send any json data this code below will enhance express ability to read json files
app.use(express.json())
app.use(express.urlencoded({extended:true}))


connectDatabase()
app.get("/",  (req,res)=>{
   
    res.json({
        status:200,
        message: "displaying it"
    })
})

// creating a blog for the schema
app.post("/createblog", async function (rq, rs) {
    try {
        const { title, subtitle, description } = rq.body;
        await Blog.create({
            title: title,
            subtitle: subtitle,
            description: description
        });
        rs.status(201).json({ message: "blog created successfully" });
    } catch (error) {
        rs.status(400).json("did not create blog");
    }
});


app.listen(2000, (req,res)=>{
    console.log("started at localhost:2000")
})
