const express = require("express");
const app = express()

const { connectDatabase } = require("./database/database")
const Blog = require("./model/blogModel")

// is we send any json data this code below will enhance express ability to read json files
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


connectDatabase()
app.get("/", (req, res) => {

    res.json({
        status: 200,
        message: "displaying it"
    })
})


// get api for all blogs
app.get("/allblogs", async function (rq, rs) {
    try {
        // fetching data from blog but asynchronously
        // equivalent to select * from Blog
        const blogList = await Blog.find()
        if (blogList.length < 1) {
            res.json({
                status: 200,
                message: "no blogs added yet"
            })
        } else {

            rs.json({
                status: 200,
                message: "welcome to all blogs",
                data: blogList
            })
        }
    } catch (error) {
        rs.status(400).json("did not have  blog");
    }
});


// getting individual blog with given id
app.get("/allblogs/:id", async function (rq, rs) {
    try {
        const blogId = rq.params.id;
        const blogSel = await Blog.find({ _id: blogId })
        // alternative way of doing the same 
        // thing as above to find blog b it
        // reference as id
        // const blogSel = await Blog.findById(blogId)
        rs.status(200).json({ message: "blog fetched", data: blogSel })
    } catch (error) {
        rs.status(400).json("did not have  blog");
    }
});


// creating a blog for the schema
app.post("/createblog", async function (rq, rs){
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

//updating a post
app.patch("/updatepost/:id", async (rq,rs)=>{
    try {
        const blogId = rq.params.id;
        const { title, subtitle, description } = rq.body;
        await Blog.findByIdAndUpdate(blogId,{
            title: title, 
            subtitle:subtitle, description:description
        })
        // following code finds te recrd with given title
        //and only first record is updated
        // const foundBlowWIthTitle = await Blog.find({title:title})
        // fouldBlowWithTitle[0].subtitle = description
        // fouldBlowWithTitle[0].description = description
        // await foundBlowWithTitle.save()
        rs.status(200).json({ message: "blog updated successfully" });
    } catch (error) {
        rs.status(400).json("did not update blog");
    }
})

//deleting a blog post
app.delete("/allblogs/:id", async function (rq, rs) {
    try {
        const blogId = rq.params.id;
        const blogSel = await Blog.findByIdAndDelete({blogId})
     
        rs.status(200).json({ message: "blog deleed successfully"})
    } catch (error) {
        rs.status(400).json("did not have  blog");
    }
});


app.listen(2000, (req, res) => {
    console.log("started at localhost:2000")
})
