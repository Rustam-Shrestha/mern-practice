const app = require("express")();

app.get("/", (req,res)=>{
    res.send("from homepage")
})
app.get("/hero")
app.listen(3000,(req,res)=>{
    console.log("to browse hit ctrl and click http://localhost:3000/")
})
app.get("/abc", (req,res)=>{
    res.json({
        status:404,
        message: "not found what you looking for"
    })
})