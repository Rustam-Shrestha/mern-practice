const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true

    },
    subtitle: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true

    }
}, {
    // inserting timestamp for each blog
    timestamps: true
})
// creating a model with an alias and schema name
// exporting the model for other pages to access it
const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog