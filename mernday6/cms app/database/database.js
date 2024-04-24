exports.connectDatabase = async () => {
    const mongoose = require("mongoose");

    try {
        await mongoose.connect("mongodb+srv://bdave5457:QDrJjYH5rPrSofCT@cluster0.rpblxhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to MongoDB successfully");
        return true; // Return true if connection succeeds
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        return false; // Return false if connection fails
    }
};
